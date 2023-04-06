import React, {
  FC,
  FormEvent,
  FormEventHandler,
  useCallback,
  useMemo,
  useRef,
} from "react";

import { Button, FormControl, Label, Modal, Tooltip } from "@axelarjs/ui";
import { BigNumber } from "ethers";
import Image from "next/image";
import { useNetwork } from "wagmi";

import { logger } from "~/lib/logger";
import { getNativeToken } from "~/lib/utils/getNativeToken";
import { useInterchainTokensQuery } from "~/services/gmp/hooks";

import { useAddErc20StateContainer } from "../../AddErc20.state";
import { useDeployAndRegisterInterchainTokenMutation } from "../../hooks/useDeployAndRegisterInterchainTokenMutation";
import { useDeployRemoteTokensMutation } from "../../hooks/useDeployRemoteTokensMutation";
import { useRegisterOriginTokenAndDeployRemoteTokensMutation } from "../../hooks/useRegisterOriginTokenAndDeployRemoteTokensMutation";
import { useRegisterOriginTokenMutation } from "../../hooks/useRegisterOriginTokenMutation";
import { NextButton, PrevButton } from "../core";
import { useStep3ChainSelectionState } from "./Step3.state";

export const Step3: FC = () => {
  const { state: rootState, actions: rootActions } =
    useAddErc20StateContainer();
  const { state, actions } = useStep3ChainSelectionState({
    selectedChains: rootState.selectedChains,
  });

  const { mutateAsync: deployAndRegisterToken } =
    useDeployAndRegisterInterchainTokenMutation();
  const { mutateAsync: registerOriginTokenAndDeployRemoteTokens } =
    useRegisterOriginTokenAndDeployRemoteTokensMutation();
  const { mutateAsync: registerOriginToken } = useRegisterOriginTokenMutation();
  const { mutateAsync: deployRemoteTokens } = useDeployRemoteTokensMutation();

  const { chain } = useNetwork();
  const { data: tokenData } = useInterchainTokensQuery({
    chainId: chain?.id,
    tokenAddress: rootState.deployedTokenAddress as `0x${string}`,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // ==> dimension 1: isPreexisting (0 = no, 1 - yes)
    // ==> dimension 2: isTokenAlreadyRegistered (0 = no, 1 - yes)
    // ==> dimension 3: deployOnOtherChains (0 = no, 1 - yes)
    const decisionMatrix = [
      [
        [handleDeployAndRegisterToken, handleDeployAndRegisterToken],
        [null, null],
      ],
      [
        [handleRegisterOriginToken, handleRegisterAndDeployRemoteTokens],
        [null, handleDeployRemoteTokens],
      ],
    ];
    const pe = +Boolean(rootState.isPreExistingToken); //preexisting
    const ar = +Boolean(rootState.tokenAlreadyRegistered); //already-registered
    const oc = +Boolean(rootState.selectedChains.size > 0); //other-chains
    const decision = decisionMatrix[pe][ar][oc];

    console.log({ pe, ar, oc, decision });
    if (decision) {
      decision(e);
    } else {
      console.warn("no op");
    }
  };

  const handleDeployRemoteTokens = useCallback<
    FormEventHandler<HTMLFormElement>
  >(
    async (e) => {
      e.preventDefault();
      console.log("handleDeployRemoteTokens");
      if (
        state.isGasPriceQueryLoading ||
        state.isGasPriceQueryError ||
        !state.gasFees
      ) {
        console.warn("gas prices not loaded");
        return;
      }
      if (!tokenData?.tokenId) {
        console.log("no token ID for ", rootState.deployedTokenAddress);
      }

      actions.setIsDeploying(true);
      await deployRemoteTokens({
        tokenId: tokenData.tokenId as `0x${string}`,
        tokenAddress: rootState.deployedTokenAddress as `0x${string}`,
        destinationChainIds: Array.from(rootState.selectedChains),
        gasFees: state.gasFees,
        onStatusUpdate: (data) => {
          if (data.type === "deployed") {
            rootActions.setDeployedTokenAddress(data.tokenAddress as string);

            data.txHash && rootActions.setTxHash(data.txHash);
          }
        },
      });
      actions.setIsDeploying(false);
      rootActions.incrementStep();
    },
    [
      state.isGasPriceQueryLoading,
      state.isGasPriceQueryError,
      state.gasFees,
      tokenData.tokenId,
      actions,
      deployRemoteTokens,
      rootState.deployedTokenAddress,
      rootState.selectedChains,
      rootActions,
    ]
  );

  const handleRegisterOriginToken = useCallback<
    FormEventHandler<HTMLFormElement>
  >(
    async (e) => {
      e.preventDefault();
      console.log("handleRegisterOriginToken");

      actions.setIsDeploying(true);
      await registerOriginToken({
        tokenAddress: rootState.deployedTokenAddress as `0x${string}`,
        onStatusUpdate: (data) => {
          if (data.type === "deployed") {
            rootActions.setDeployedTokenAddress(data.tokenAddress as string);
            data.txHash && rootActions.setTxHash(data.txHash);
          }
        },
      });
      actions.setIsDeploying(false);
      rootActions.incrementStep();
    },
    [actions, registerOriginToken, rootState.deployedTokenAddress, rootActions]
  );

  const handleRegisterAndDeployRemoteTokens = useCallback<
    FormEventHandler<HTMLFormElement>
  >(
    async (e) => {
      e.preventDefault();

      if (
        state.isGasPriceQueryLoading ||
        state.isGasPriceQueryError ||
        !state.gasFees
      ) {
        logger.warn(
          "[handleRegisterAndDeployRemoteTokens]: ",
          "gas prices not loaded"
        );
        return;
      }
      actions.setIsDeploying(true);
      await registerOriginTokenAndDeployRemoteTokens({
        tokenAddress: rootState.deployedTokenAddress as `0x${string}`,
        destinationChainIds: Array.from(rootState.selectedChains),
        gasFees: state.gasFees,
        onStatusUpdate: (data) => {
          if (data.type === "deployed") {
            rootActions.setDeployedTokenAddress(data.tokenAddress as string);
            data.txHash && rootActions.setTxHash(data.txHash);
          }
        },
      });
      actions.setIsDeploying(false);
      rootActions.incrementStep();
    },
    [
      state.isGasPriceQueryLoading,
      state.isGasPriceQueryError,
      state.gasFees,
      actions,
      registerOriginTokenAndDeployRemoteTokens,
      rootState.deployedTokenAddress,
      rootState.selectedChains,
      rootActions,
    ]
  );

  const handleDeployAndRegisterToken = useCallback<
    FormEventHandler<HTMLFormElement>
  >(
    async (e) => {
      e.preventDefault();
      console.log("handleDeployAndRegisterToken");

      if (
        state.isGasPriceQueryLoading ||
        state.isGasPriceQueryError ||
        !state.gasFees
      ) {
        console.warn("gas prices not loaded");
        return;
      }
      actions.setIsDeploying(true);

      const decimalAdjustment = BigNumber.from(10).pow(rootState.tokenDecimals);
      const amountToMint = BigNumber.from(rootState.amountToMint).mul(
        decimalAdjustment
      );

      await deployAndRegisterToken({
        tokenName: rootState.tokenName,
        tokenSymbol: rootState.tokenSymbol,
        decimals: rootState.tokenDecimals,
        destinationChainIds: Array.from(rootState.selectedChains),
        amountToMint,
        gasFees: state.gasFees,
        sourceChainId: state.evmChains?.find(
          (evmChain) => evmChain.chain_id === state.network.chain?.id
        )?.chain_name as string,
        onStatusUpdate: (data) => {
          if (data.type === "deployed") {
            rootActions.setDeployedTokenAddress(data.tokenAddress as string);
            data.txHash && rootActions.setTxHash(data.txHash);
            rootActions.incrementStep();
            actions.setIsDeploying(false);
          }
        },
      });
    },
    [
      state.isGasPriceQueryLoading,
      state.isGasPriceQueryError,
      state.gasFees,
      state.evmChains,
      state.network.chain?.id,
      actions,
      deployAndRegisterToken,
      rootState.tokenName,
      rootState.tokenSymbol,
      rootState.tokenDecimals,
      rootState.selectedChains,
      rootState.amountToMint,
      rootActions,
    ]
  );

  const eligibleChains = useMemo(
    () =>
      state.evmChains?.filter(
        (chain) => chain.chain_id !== state.network.chain?.id
      ),
    [state.evmChains, state.network.chain?.id]
  );

  const formSubmitRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <FormControl>
          <Label>
            <Label.Text>Chains to deploy remote tokens</Label.Text>
            {Boolean(state.gasFees?.length) && (
              <Label.AltText>
                <Tooltip tip="Approximate gas cost">
                  <span className="ml-2 text-xs">
                    (≈ {state.totalGasFee}{" "}
                    {state?.sourceChainId &&
                      getNativeToken(state.sourceChainId)}{" "}
                    in fees)
                  </span>
                </Tooltip>
              </Label.AltText>
            )}
          </Label>
          <div className="bg-base-300 flex flex-wrap gap-2 rounded-3xl p-4">
            {eligibleChains?.map((chain) => {
              const isSelected = rootState.selectedChains.has(chain.chain_name);

              return (
                <Tooltip
                  tip={`Deploy on ${chain.name}`}
                  key={chain.chain_name}
                  position="top"
                >
                  <Button
                    ghost={true}
                    className="rounded-2xl hover:ring"
                    size="sm"
                    role="button"
                    color="primary"
                    outline={isSelected}
                    onClick={() => {
                      const action = isSelected
                        ? rootActions.removeSelectedChain
                        : rootActions.addSelectedChain;

                      action(chain.chain_name);
                    }}
                  >
                    <Image
                      className="pointer-events-none -translate-x-2 rounded-full"
                      src={`${process.env.NEXT_PUBLIC_EXPLORER_URL}${chain.image}`}
                      width={24}
                      height={24}
                      alt={`${chain.name} logo`}
                    />
                    <span>{chain.name}</span>
                  </Button>
                </Tooltip>
              );
            })}
          </div>
        </FormControl>
        <button type="submit" ref={formSubmitRef} />
      </form>
      <Modal.Actions>
        <PrevButton onClick={rootActions.decrementStep}>
          Token details
        </PrevButton>
        <NextButton
          loading={state.isDeploying}
          disabled={state.isGasPriceQueryLoading || state.isGasPriceQueryError}
          onClick={() => formSubmitRef.current?.click()}
        >
          Deploy & register token{" "}
          {Boolean(state.gasFees?.length) &&
            `on ${state.gasFees?.length} chain${
              Number(state.gasFees?.length) > 1 ? "s" : ""
            }`}
        </NextButton>
      </Modal.Actions>
    </>
  );
};

export default Step3;
