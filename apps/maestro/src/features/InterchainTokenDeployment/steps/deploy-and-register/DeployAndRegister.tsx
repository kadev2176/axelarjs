import type { EVMChainConfig } from "@axelarjs/api";
import {
  Button,
  Dialog,
  FormControl,
  Label,
  TextInput,
  Tooltip,
} from "@axelarjs/ui";
import { toast } from "@axelarjs/ui/toaster";
import { invariant, Maybe } from "@axelarjs/utils";
import React, {
  ChangeEvent,
  useCallback,
  useMemo,
  useRef,
  type FC,
  type FormEventHandler,
} from "react";
import Image from "next/image";

import { parseUnits } from "viem";
import { useAccount, useBalance, useChainId } from "wagmi";

import { useDeployAndRegisterRemoteInterchainTokenMutation } from "~/features/InterchainTokenDeployment/hooks";
import { useInterchainTokenDeploymentStateContainer } from "~/features/InterchainTokenDeployment/InterchainTokenDeployment.state";
import { handleTransactionResult } from "~/lib/transactions/handlers";
import { getNativeToken } from "~/lib/utils/getNativeToken";
import { preventNonNumericInput } from "~/lib/utils/validation";
import { NextButton } from "../shared";
import { useStep3ChainSelectionState } from "./DeployAndRegister.state";

type ChainPickerProps = {
  eligibleChains: EVMChainConfig[];
  selectedChains: string[];
  onChainClick: (chainId: string) => void;
  disabled?: boolean;
};

const ChainPicker: FC<ChainPickerProps> = ({
  eligibleChains,
  selectedChains,
  onChainClick,
  disabled,
}) => {
  const handleToggleAll = useCallback(() => {
    eligibleChains.forEach((chain, i) =>
      setTimeout(onChainClick.bind(null, chain.id), 16.6 * i)
    );
  }, [eligibleChains, onChainClick]);

  const isToggleAllDisabled = useMemo(
    () =>
      Boolean(
        selectedChains.length && selectedChains.length !== eligibleChains.length
      ),
    [selectedChains, eligibleChains]
  );

  return (
    <section className="space-y-4">
      <div className="bg-base-300 grid grid-cols-2 justify-start gap-1.5 rounded-3xl p-2.5 sm:grid-cols-3 sm:gap-2">
        {eligibleChains?.map((chain) => {
          const isSelected = selectedChains.includes(chain.id);

          return (
            <Tooltip
              tip={`Deploy on ${chain.name}`}
              key={chain.chain_name}
              position="top"
            >
              <Button
                disabled={disabled}
                className="w-full rounded-2xl hover:ring"
                size="sm"
                role="button"
                variant={isSelected ? "success" : undefined}
                onClick={onChainClick.bind(null, chain.id)}
              >
                <Image
                  className="pointer-events-none absolute left-3 -translate-x-2 rounded-full"
                  src={`${process.env.NEXT_PUBLIC_EXPLORER_URL}${chain.image}`}
                  width={24}
                  height={24}
                  alt={`${chain.name} logo`}
                />
                <span className="ml-4">{chain.name}</span>
              </Button>
            </Tooltip>
          );
        })}
      </div>
      <div className="grid place-content-center">
        <Button
          size="sm"
          variant="ghost"
          disabled={isToggleAllDisabled || disabled}
          onClick={handleToggleAll}
        >
          toggle all
        </Button>
      </div>
    </section>
  );
};

const FormInput = Object.assign({}, TextInput, {
  defaultProps: {
    ...TextInput.defaultProps,
    className: "bg-base-200",
    bordered: true,
  },
}) as typeof TextInput;

export const Step3: FC = () => {
  const { state: rootState, actions: rootActions } =
    useInterchainTokenDeploymentStateContainer();

  const { state, actions } = useStep3ChainSelectionState();

  const chainId = useChainId();

  const sourceChain = state.evmChains.find((x) => x.chain_id === chainId);

  const { writeAsync: deployInterchainTokenAsync } =
    useDeployAndRegisterRemoteInterchainTokenMutation(
      {
        onStatusUpdate(txState) {
          if (txState.type === "deployed") {
            rootActions.setTxState(txState);
            rootActions.setStep(2);
            actions.setIsDeploying(false);
            return;
          }
          rootActions.setTxState(txState);
        },
      },
      {
        salt: rootState.tokenDetails.salt as `0x${string}`,
        tokenName: rootState.tokenDetails.tokenName,
        tokenSymbol: rootState.tokenDetails.tokenSymbol,
        decimals: rootState.tokenDetails.tokenDecimals,
        destinationChainIds: Array.from(rootState.selectedChains),
        remoteDeploymentGasFees: state.remoteDeploymentGasFees ?? [],
        remoteTransferGasFees: state.remoteTransferGasFees ?? [],
        sourceChainId: sourceChain?.id ?? "",
        distributorAddress: rootState.tokenDetails.distributor,
        originInitialSupply: Maybe.of(
          rootState.tokenDetails.originTokenSupply
        ).mapOrUndefined(BigInt),
        remoteInitialSupply: Maybe.of(
          rootState.tokenDetails.remoteTokenSupply
        ).mapOrUndefined(BigInt),
      }
    );

  const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    async (e) => {
      e.preventDefault();

      if (
        state.isEstimatingGasFees ||
        state.hasGasFeesEstimationError ||
        !state.remoteDeploymentGasFees ||
        !state.evmChains ||
        !deployInterchainTokenAsync
      ) {
        console.warn("gas prices not loaded");
        return;
      }
      actions.setIsDeploying(true);

      invariant(sourceChain, "source chain not found");

      rootActions.setTxState({
        type: "pending_approval",
      });

      const txPromise = deployInterchainTokenAsync();

      await handleTransactionResult(txPromise, {
        onSuccess(tx) {
          rootActions.setTxState({
            type: "deploying",
            txHash: tx.hash,
          });
        },
        onTransactionError(txError) {
          rootActions.setTxState({
            type: "idle",
          });

          toast.error(txError.shortMessage);
        },
      });
    },
    [
      state.isEstimatingGasFees,
      state.hasGasFeesEstimationError,
      state.remoteDeploymentGasFees,
      state.evmChains,
      deployInterchainTokenAsync,
      actions,
      sourceChain,
      rootActions,
    ]
  );

  const eligibleChains = useMemo(
    () => state.evmChains?.filter((chain) => chain.chain_id !== chainId),
    [state.evmChains, chainId]
  );

  const formSubmitRef = useRef<HTMLButtonElement>(null);

  const { address } = useAccount();

  const { data: balance } = useBalance({
    address,
  });

  const nativeTokenSymbol = getNativeToken(state.sourceChainId);

  const hasInsufficientGasBalance = useMemo(() => {
    if (!balance || !state.remoteDeploymentGasFees) {
      return false;
    }

    const gasFeeBn = parseUnits(state.totalGasFee, balance.decimals);

    return gasFeeBn > balance.value;
  }, [balance, state.remoteDeploymentGasFees, state.totalGasFee]);

  const buttonChildren = useMemo(() => {
    if (rootState.txState.type === "pending_approval") {
      return "Check your wallet";
    }
    if (rootState.txState.type === "deploying") {
      return "Deploying interchain token";
    }

    if (state.isEstimatingGasFees) {
      return "Loading gas fees";
    }
    if (state.hasGasFeesEstimationError) {
      return "Failed to load gas prices";
    }

    if (hasInsufficientGasBalance) {
      return `Insufficient ${nativeTokenSymbol} for gas fees`;
    }

    return (
      <>
        Deploy{" "}
        {!!state.remoteDeploymentGasFees?.length && (
          <>
            {state.remoteDeploymentGasFees?.length && <span>and register</span>}
            {` on ${state.remoteDeploymentGasFees.length + 1} chain${
              state.remoteDeploymentGasFees?.length + 1 > 1 ? "s" : ""
            }`}
          </>
        )}
      </>
    );
  }, [
    rootState.txState.type,
    state.isEstimatingGasFees,
    state.hasGasFeesEstimationError,
    state.remoteDeploymentGasFees,
    hasInsufficientGasBalance,
    nativeTokenSymbol,
  ]);

  const { totalSupply, totalSupplyBreakdown } = useMemo(() => {
    const originTokenSupply = Number(rootState.tokenDetails.originTokenSupply);
    const remoteTokenSupply = Number(rootState.tokenDetails.remoteTokenSupply);
    const selectedChains = rootState.selectedChains.length;

    const totalSupply = originTokenSupply + remoteTokenSupply * selectedChains;

    const multiplierComment = selectedChains > 1 ? ` × ${selectedChains}` : "";

    const formattedTotalSupply = totalSupply.toLocaleString();
    const formattedOriginTokenSupply = originTokenSupply.toLocaleString();
    const formattedRemoteTokenSupply = remoteTokenSupply.toLocaleString();

    const totalSupplyBreakdown = `${formattedOriginTokenSupply} + ${formattedRemoteTokenSupply} ${multiplierComment}`;

    return { totalSupply: formattedTotalSupply, totalSupplyBreakdown };
  }, [
    rootState.tokenDetails.originTokenSupply,
    rootState.tokenDetails.remoteTokenSupply,
    rootState.selectedChains.length,
  ]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <Label>
            <Label.Text>Additional chains (optional):</Label.Text>

            {Boolean(state.remoteDeploymentGasFees?.length) && (
              <Label.AltText>
                <Tooltip tip="Approximate gas cost">
                  <span className="ml-2 whitespace-nowrap text-xs">
                    (≈ {state.totalGasFee}{" "}
                    {state?.sourceChainId && nativeTokenSymbol} in fees)
                  </span>
                </Tooltip>
              </Label.AltText>
            )}
          </Label>
          <ChainPicker
            eligibleChains={eligibleChains}
            selectedChains={rootState.selectedChains}
            onChainClick={rootActions.toggleAdditionalChain}
            disabled={
              rootState.txState.type === "pending_approval" ||
              rootState.txState.type === "deploying"
            }
          />
        </FormControl>
        <button type="submit" ref={formSubmitRef} />
        {rootState.selectedChains.length > 0 && (
          <FormControl>
            <Label htmlFor="originTokenSupply">
              Amount to mint on remote chains
            </Label>
            <FormInput
              id="remoteTokenSupply"
              placeholder="Enter amount to mint"
              min={0}
              onKeyDown={preventNonNumericInput}
              value={rootState.tokenDetails.remoteTokenSupply}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                rootActions.setRemoteTokenSupply(e.target.value);
              }}
            />
            <small className="p-2 text-center">
              Initial supply: <span className="font-bold">{totalSupply}</span>{" "}
              {Number(rootState.tokenDetails.remoteTokenSupply) > 0 && (
                <>
                  (<span className="font-bold">{totalSupplyBreakdown}</span>)
                </>
              )}
            </small>
          </FormControl>
        )}
      </form>
      <Dialog.Actions>
        <NextButton
          length="block"
          loading={
            rootState.txState.type === "pending_approval" ||
            rootState.txState.type === "deploying"
          }
          disabled={
            state.isEstimatingGasFees ||
            state.hasGasFeesEstimationError ||
            hasInsufficientGasBalance
          }
          onClick={() => formSubmitRef.current?.click()}
        >
          <span>{buttonChildren}</span>
        </NextButton>
      </Dialog.Actions>
    </>
  );
};

export default Step3;