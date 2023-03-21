import { FC, useMemo } from "react";

import { Steps } from "@axelarjs/ui";

export type StepsSummaryProps = {
  currentStep: number;
  newTokenType: "new" | "existing";
};
export const StepsSummary: FC<StepsSummaryProps> = (
  props: StepsSummaryProps
) => {
  return (
    <Steps className="my-10 h-24 w-full text-sm">
      <Steps.Step active={props.currentStep >= 0}>Select Flow</Steps.Step>
      <Steps.Step active={props.currentStep >= 1}>
        {props.newTokenType === "new"
          ? "New ERC-20 token details"
          : "Validate your ERC-20"}
      </Steps.Step>
      <Steps.Step active={props.currentStep >= 2}>
        Deploy and register your token
      </Steps.Step>
    </Steps>
  );
};