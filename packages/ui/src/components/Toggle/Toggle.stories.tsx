import { pluralizeKeys } from "@axelarjs/utils";

import { Meta } from "@storybook/react";

import { configurePlayground } from "../../StoryPlayground";
import { COLOR_VARIANTS, SIZE_VARIANTS } from "../../theme";
import { Toggle } from "./Toggle";

export default {
  title: "components/Toggle",
  component: Toggle,
  argTypes: {
    onClick: {
      action: "clicked",
    },
  },
} as Meta<typeof Toggle>;

Toggle.defaultProps = {
  defaultChecked: true,
};

// creates stories for variansts (color, size, shape)
const { Variants, Sizes } = pluralizeKeys(
  configurePlayground(Toggle, {
    variant: {
      values: COLOR_VARIANTS,
      noChildren: true,
    },
    size: {
      values: SIZE_VARIANTS,
      noChildren: true,
    },
  })
);

export { Variants, Sizes };
