import { FC, useCallback, useEffect, useMemo, useState } from "react";

import { Button, CopyToClipboardButton, Tooltip } from "@axelarjs/ui";
import { maskAddress, Maybe, unSluggify } from "@axelarjs/utils";
import { isAddress } from "ethers/lib/utils.js";
import { useRouter } from "next/router";
import { partition, without } from "rambda";
import { useAccount } from "wagmi";

import { useDeployRemoteTokensMutation } from "~/compounds/AddErc20/hooks/useDeployRemoteTokensMutation";
import { InterchainTokenList } from "~/compounds/InterchainTokenList";
import Page from "~/layouts/Page";
import { useChainFromRoute } from "~/lib/hooks";
import { useEstimateGasFeeMultipleChains } from "~/services/axelarjsSDK/hooks";
import { useInterchainTokensQuery } from "~/services/gmp/hooks";

const InterchainTokensPage = () => {
  const { chainName, tokenAddress } = useRouter().query as {
    chainName: string;
    tokenAddress: string;
  };

  const routeChain = useChainFromRoute();

  const { data: interchainToken } = useInterchainTokensQuery({
    chainId: routeChain?.id,
    tokenAddress: tokenAddress as `0x${string}`,
  });

  if (!isAddress(tokenAddress)) {
    return <div>Invalid token address</div>;
  }

  return (
    <Page
      mustBeConnected
      pageTitle={`Interchain Tokens - ${unSluggify(chainName)}`}
      className="!flex flex-1 flex-col gap-12 md:gap-16"
    >
      <section>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Interchain Token</h2>
          <div className="flex items-center">
            {interchainToken?.tokenAddress && (
              <CopyToClipboardButton
                copyText={tokenAddress}
                size="sm"
                ghost={true}
              >
                Token Address: {maskAddress(tokenAddress)}
              </CopyToClipboardButton>
            )}
            {interchainToken.tokenId && (
              <Tooltip
                tip={
                  "Token ID is an internal identifier used to correlate all instances of an ERC-20 token across all supported chains"
                }
                position="bottom"
              >
                <CopyToClipboardButton
                  copyText={interchainToken.tokenId}
                  size="sm"
                  ghost={true}
                >
                  Token ID: {maskAddress(interchainToken.tokenId)}
                </CopyToClipboardButton>{" "}
              </Tooltip>
            )}
          </div>
        </div>
      </section>
      {routeChain && (
        <ConnectedInterchainTokensPage
          chainId={routeChain?.id}
          tokenAddress={tokenAddress}
        />
      )}
    </Page>
  );
};

export default InterchainTokensPage;

type ConnectedInterchainTokensPageProps = {
  chainId: number;
  tokenAddress: `0x${string}`;
};

const ConnectedInterchainTokensPage: FC<ConnectedInterchainTokensPageProps> = (
  props
) => {
  const { data: interchainToken, refetch } = useInterchainTokensQuery({
    chainId: props.chainId,
    tokenAddress: props.tokenAddress as `0x${string}`,
  });

  const [selectedChainIds, setSelectedChainIds] = useState<number[]>([]);

  const [registered, unregistered] = Maybe.of(
    interchainToken?.matchingTokens
  ).mapOr(
    [[], []],
    partition((x) => x.isRegistered)
  );

  const [deployedTokens, setDeployedTokens] = useState<
    {
      tokenAddress: `0x${string}`;
      txHash: `0x${string}`;
    }[]
  >([]);

  const { mutateAsync: deployRemoteTokens, isLoading: isDeploying } =
    useDeployRemoteTokensMutation();

  const destinationChainIds = useMemo(() => {
    return selectedChainIds
      .map((x) => unregistered.find((y) => y.chainId === x)?.chain.id)
      .filter(Boolean) as string[];
  }, [selectedChainIds, unregistered]);

  const { address } = useAccount();

  useEffect(() => {
    if (destinationChainIds.length === 0 || deployedTokens.length === 0) {
      return;
    }

    if (deployedTokens.length === destinationChainIds.length) {
      setSelectedChainIds([]);
      setDeployedTokens([]);
      console.log("deployedTokens", deployedTokens);

      refetch();
    }
  }, [
    address,
    deployRemoteTokens.length,
    deployedTokens,
    destinationChainIds,
    interchainToken.tokenId,
    props.chainId,
    props.tokenAddress,
    refetch,
  ]);

  const {
    data: gasFees,
    isLoading: isGasPriceQueryLoading,
    isError: isGasPriceQueryError,
  } = useEstimateGasFeeMultipleChains({
    sourceChainId: interchainToken.chain.id,
    destinationChainIds,
    gasLimit: 1_000_000,
    gasMultipler: 2,
  });

  const handleDeployRemoteTokens = useCallback(async () => {
    if (!(props.chainId && interchainToken?.tokenId && gasFees)) {
      return;
    }

    await deployRemoteTokens({
      destinationChainIds,
      tokenAddress: props.tokenAddress,
      tokenId: interchainToken.tokenId,
      gasFees,
      onStatusUpdate(status) {
        console.log({ status });
        if (status.type === "deployed") {
          setDeployedTokens((xs) =>
            xs.concat({
              tokenAddress: status.tokenAddress,
              txHash: status.txHash,
            })
          );
        }
      },
    });
  }, [
    props.chainId,
    props.tokenAddress,
    interchainToken.tokenId,
    gasFees,
    deployRemoteTokens,
    destinationChainIds,
  ]);

  return (
    <div className="flex flex-col gap-8 md:relative">
      <InterchainTokenList
        title="Registered interchain tokens"
        tokens={registered}
      />
      <InterchainTokenList
        title="Unregistered interchain tokens"
        tokens={unregistered.map((x) => ({
          ...x,
          isSelected: selectedChainIds.includes(x.chainId),
        }))}
        onToggleSelection={(chainId) => {
          setSelectedChainIds((selected) =>
            selected.includes(chainId)
              ? without([chainId], selected)
              : selected.concat(chainId)
          );
        }}
        footer={
          <div className="flex h-4 w-full justify-end p-4">
            {selectedChainIds.length > 0 ? (
              <Button
                color="accent"
                onClick={handleDeployRemoteTokens}
                disabled={isGasPriceQueryLoading || isGasPriceQueryError}
                loading={isDeploying}
              >
                Deploy token on {selectedChainIds.length} additional chain
                {selectedChainIds.length > 1 ? "s" : ""}
              </Button>
            ) : undefined}
          </div>
        }
      />
    </div>
  );
};