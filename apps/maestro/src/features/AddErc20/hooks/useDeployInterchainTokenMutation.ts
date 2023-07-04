import { INTERCHAIN_TOKEN_SERVICE_ABI } from "@axelarjs/evm";
import { toast } from "@axelarjs/ui";
import { throttle } from "@axelarjs/utils";

import { TransactionExecutionError } from "viem";
import {
  useAccount,
  useMutation,
  useWaitForTransaction,
  useWalletClient,
} from "wagmi";
import { watchContractEvent } from "wagmi/actions";

import { useInterchainTokenServiceDeployInterchainToken } from "~/lib/contract/hooks/useInterchainTokenService";
import { logger } from "~/lib/logger";
import { hexlify, hexZeroPad } from "~/lib/utils/hex";
import type { DeployAndRegisterTransactionState } from "../AddErc20.state";

const INTERCHAIN_TOKEN_SERVICE_ADDRESS = String(
  process.env.NEXT_PUBLIC_TOKEN_LINKER_ADDRESS
) as `0x${string}`;

export type UseDeployAndRegisterInterchainTokenInput = {
  sourceChainId: string;
  tokenName: string;
  tokenSymbol: string;
  decimals: number;
  destinationChainIds: string[];
  gasFees: bigint[];
};

export function useDeployInterchainTokenMutation(config: {
  value: bigint;
  onStatusUpdate?: (message: DeployAndRegisterTransactionState) => void;
  onFinished?: () => void;
}) {
  const signer = useWalletClient();

  const { address } = useAccount();

  const {
    writeAsync: deployInterchainTokenAsync,
    data: deployInterchainTokenResult,
  } = useInterchainTokenServiceDeployInterchainToken({
    address: INTERCHAIN_TOKEN_SERVICE_ADDRESS,
    value: config.value,
  });

  let currentInput: UseDeployAndRegisterInterchainTokenInput = {
    sourceChainId: "",
    tokenName: "",
    tokenSymbol: "",
    decimals: 0,
    destinationChainIds: [],
    gasFees: [],
  };

  const onStatusUpdate = throttle(config.onStatusUpdate ?? (() => {}), 150);

  const unwatch = watchContractEvent(
    {
      address: INTERCHAIN_TOKEN_SERVICE_ADDRESS,
      eventName: "StandardizedTokenDeployed",
      abi: INTERCHAIN_TOKEN_SERVICE_ABI,
    },
    (logs) => {
      const log = logs.find(
        (log) =>
          Boolean(log.args?.tokenId) &&
          log?.args.decimals === currentInput.decimals &&
          log?.args.name === currentInput.tokenName &&
          log?.args.symbol === currentInput.tokenSymbol &&
          log?.args.mintTo === address
      );

      if (!log) {
        return;
      }

      unwatch();

      const tokenAddress = `0x${log.args?.tokenId}`;

      onStatusUpdate({
        type: "deployed",
        tokenAddress: tokenAddress as `0x${string}`,
        txHash: deployInterchainTokenResult?.hash as `0x${string}`,
      });
    }
  );

  useWaitForTransaction({
    hash: deployInterchainTokenResult?.hash,
    confirmations: 8,
    onSuccess() {
      if (!deployInterchainTokenResult) {
        return;
      }
      config.onFinished?.();
    },
  });

  return useMutation(
    async (input: UseDeployAndRegisterInterchainTokenInput) => {
      if (!(signer && address)) {
        return;
      }

      currentInput = input;

      //deploy and register tokens
      const salt = hexZeroPad(
        hexlify(Math.floor(Math.random() * 1_000_000_000)),
        32
      ) as `0x${string}`;

      onStatusUpdate({
        type: "pending_approval",
      });
      try {
        const tx = await deployInterchainTokenAsync({
          args: [
            input.tokenName,
            input.tokenSymbol,
            input.decimals,
            address,
            salt,
            input.destinationChainIds,
            input.gasFees,
          ],
        });
        if (tx?.hash) {
          onStatusUpdate({
            type: "deploying",
            txHash: tx.hash,
          });
        }
      } catch (error) {
        onStatusUpdate({
          type: "idle",
        });
        if (error instanceof TransactionExecutionError) {
          toast.error(`Transaction failed: ${error.cause.shortMessage}`);

          logger.error("Failed to deploy interchain token", error.cause);
        }
      }
    }
  );
}
