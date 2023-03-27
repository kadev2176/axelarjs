import { FC } from "react";

import { TextInput } from "@axelarjs/ui";

import { StepProps } from "..";

export const NewERC20Token: FC<StepProps> = (props: StepProps) => {
  return (
    <div className="grid grid-cols-1 gap-y-2">
      <label className="text-sm">Token Name</label>
      <TextInput
        inputSize={"md"}
        color={"primary"}
        value={props.tokenName}
        onChange={(e) => props.setTokenName(e.target.value)}
        placeholder="Input your token name"
      />
      <label className="text-sm">Token Symbol</label>
      <TextInput
        inputSize={"md"}
        color={"primary"}
        value={props.tokenSymbol}
        onChange={(e) => props.setTokenSymbol(e.target.value)}
        placeholder="Input your token symbol"
      />
      <label className="text-sm">Token Decimals</label>
      <TextInput
        inputSize={"md"}
        type={"number"}
        color={"primary"}
        value={props.decimals}
        onChange={(e) => props.setDecimals(parseInt(e.target.value))}
        placeholder="Input your token decimals"
      />
      <label className="text-sm">Amount to mint (leave zero for none)</label>
      <TextInput
        inputSize={"md"}
        type={"number"}
        color={"primary"}
        value={props.amountToMint}
        onChange={(e) => props.setAmountToMint(parseInt(e.target.value))}
        placeholder="Input your amount to mint"
      />
    </div>
  );
};