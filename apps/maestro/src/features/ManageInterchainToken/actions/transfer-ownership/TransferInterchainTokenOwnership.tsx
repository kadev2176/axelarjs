import {
  Button,
  Dialog,
  FormControl,
  Label,
  TextInput,
  toast,
} from "@axelarjs/ui";
import { useCallback, useMemo, type FC } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

import {
  isAddress,
  TransactionExecutionError,
  UserRejectedRequestError,
} from "viem";
import { useAccount, useChainId, useWaitForTransaction } from "wagmi";

import { useTransferInterchainTokenOnwership } from "~/lib/contract/hooks/useInterchainToken";
import { useTransactionState } from "~/lib/hooks/useTransaction";
import { trpc } from "~/lib/trpc";
import { useManageInterchainTokenContainer } from "../../ManageInterchaintoken.state";

type FormState = {
  recipientAddress: `0x${string}`;
};

export const TransferInterchainTokenOwnership: FC = () => {
  const [txState, setTxState] = useTransactionState();
  const [state] = useManageInterchainTokenContainer();

  const { address: accountAddress } = useAccount();
  const chainId = useChainId();

  const {
    writeAsync: transferOwnershipAsync,
    isLoading: isTransfering,
    data: transferResult,
  } = useTransferInterchainTokenOnwership({
    address: state.tokenAddress,
  });

  const trpcContext = trpc.useContext();

  useWaitForTransaction({
    hash: transferResult?.hash,
    confirmations: 8,
    async onSuccess(receipt) {
      if (!transferResult) {
        return;
      }

      await Promise.all([
        trpcContext.interchainToken.searchInterchainToken.invalidate(),
        trpcContext.erc20.getERC20TokenBalanceForOwner.invalidate(),
      ]);

      await Promise.all([
        trpcContext.interchainToken.searchInterchainToken.refetch(),
        trpcContext.erc20.getERC20TokenBalanceForOwner.refetch({
          tokenAddress: state.tokenAddress,
          chainId: chainId,
          owner: accountAddress as `0x${string}`,
        }),
      ]);

      setTxState({
        status: "confirmed",
        receipt,
      });

      toast.success("Successfully transferred token ownership");
    },
  });

  const { register, handleSubmit, formState } = useForm<FormState>({
    defaultValues: {
      recipientAddress: undefined,
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const submitHandler = useCallback<SubmitHandler<FormState>>(
    async (data, e) => {
      e?.preventDefault();

      setTxState({
        status: "awaiting_approval",
      });

      try {
        const txResult = await transferOwnershipAsync({
          args: [data.recipientAddress],
        });

        if (txResult?.hash) {
          setTxState({
            status: "submitted",
            hash: txResult?.hash,
          });
        }
      } catch (error) {
        setTxState({
          status: "reverted",
          error: error as Error,
        });

        if (
          error instanceof TransactionExecutionError &&
          error.cause instanceof UserRejectedRequestError
        ) {
          console.log("User rejected request");
        }
      }
    },
    [setTxState, transferOwnershipAsync]
  );

  const buttonChildren = useMemo(() => {
    switch (txState.status) {
      case "idle":
      case "confirmed":
        return "Transfer token ownership";
      case "awaiting_approval":
        return "Waiting for approval";
      case "reverted":
        return "Failed to transfer ownership";
    }
  }, [txState]);

  return (
    <>
      <Dialog.Title className="flex">
        <span>Transfer token ownership</span>
      </Dialog.Title>
      <form
        className="flex flex-1 flex-col justify-between gap-4"
        onSubmit={handleSubmit(submitHandler)}
      >
        <FormControl>
          <Label htmlFor="recipientAddress">
            <Label.Text>Recipient address</Label.Text>
          </Label>
          <TextInput
            id="recipientAddress"
            bordered
            placeholder="Enter recipient address"
            className="bg-base-200"
            min={0}
            {...register("recipientAddress", {
              disabled: isTransfering,
              validate(value) {
                if (!value || !isAddress(value)) {
                  return "Invalid address";
                }

                return true;
              },
            })}
          />
        </FormControl>

        <Button
          color="primary"
          type="submit"
          disabled={!formState.isValid || isTransfering}
          loading={
            txState.status === "awaiting_approval" ||
            txState.status === "submitted"
          }
        >
          {buttonChildren}
        </Button>
      </form>
    </>
  );
};

export default TransferInterchainTokenOwnership;