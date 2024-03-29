import { ComponentProps } from "react";

import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

import tw from "../../tw";

const cardVariance = cva("card", {
  variants: {
    bordered: {
      true: "card-bordered",
    },
    compact: {
      true: "card-compact",
    },
    normal: {
      true: "card-normal",
    },
  },
});

const StyledCard = tw.div``;

type CardBaseProps = VariantProps<typeof cardVariance>;

export interface CardProps
  extends ComponentProps<typeof StyledCard>,
    CardBaseProps {}

const CardContainer = ({
  bordered,
  compact,
  normal,
  className,
  ...props
}: CardProps) => {
  return (
    <StyledCard
      className={twMerge(
        cardVariance({ bordered, compact, normal }),
        className,
        "card"
      )}
      {...props}
    />
  );
};

export const Card = Object.assign(CardContainer, {
  Title: tw.div`card-title`,
  Body: tw.div`card-body`,
  Actions: tw.div`card-actions`,
  Side: tw.div`card-side`,
});
