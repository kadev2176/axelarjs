import { pluralizeKeys } from "@axelarjs/utils";

import type { Meta, StoryFn } from "@storybook/react";

import { configurePlayground } from "../../StoryPlayground";
import { COLOR_VARIANTS, SIZE_VARIANTS } from "../../theme";
import { TextInput } from "./TextInput";

export default {
  title: "components/TextInput",
  component: TextInput,
  docs: {
    description: {
      component: "TextInput, TextInput, does whatever a TextInput do.",
    },
  },
} as Meta<typeof TextInput>;

const Template: StoryFn<typeof TextInput> = (args) => {
  return <TextInput {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  placeholder: "Placeholder",
};
const { InputSizes, Variants } = pluralizeKeys(
  configurePlayground(TextInput, {
    inputSize: {
      values: SIZE_VARIANTS,
      noChildren: true,
    },
    variant: {
      values: COLOR_VARIANTS,
      noChildren: true,
    },
  })
);

export { InputSizes, Variants };
