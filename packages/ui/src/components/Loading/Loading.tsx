import { ComponentProps, FC } from "react";

import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

import tw from "../../tw";

export const loadingVariance = cva("loading", {
  variants: {
    /**
     * The size of the loading indicator
     **/
    size: {
      xs: "loading-xs",
      sm: "loading-sm",
      md: "loading-md",
      lg: "loading-lg",
    },
    /**
     * The variant of the loading indicator, configurable in the theme
     **/
    variant: {
      primary: "text-primary",
      secondary: "text-secondary",
      neutral: "text-neutral",
      accent: "text-accent",
      info: "text-info",
      success: "text-success",
      warning: "text-warning",
      error: "text-error",
    },
    /**
     * The shape of the loading indicator (circle or square)
     **/
    shape: {
      spinner: "loading-spinner",
      dots: "loading-dots",
      ring: "loading-ring",
      ball: "loading-ball",
      bars: "loading-bars",
      infinity: "loading-infinity",
    },
  },
});

const StyledLoading = tw.span``;

type BaseLoadingProps = Omit<ComponentProps<typeof StyledLoading>, "color">;

export interface LoadingProps
  extends BaseLoadingProps,
    VariantProps<typeof loadingVariance> {}

export const Loading: FC<LoadingProps> = ({
  shape,
  size,
  variant,
  className,
  ...props
}) => (
  <StyledLoading
    className={twMerge(loadingVariance({ shape, variant, size }), className)}
    {...props}
  />
);

Loading.defaultProps = {
  shape: "spinner",
  size: "md",
};
