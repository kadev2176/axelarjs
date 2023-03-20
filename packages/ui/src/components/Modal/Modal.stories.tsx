import type { Meta, StoryFn } from "@storybook/react";
import tw from "tailwind-styled-components";

import { Modal } from "./Modal";

const StyledDialogTitle = tw.div`
  font-extrabold
  text-2xl
  m-0
`;

const StyledDialogDescription = tw.div`
  my-2.5
`;
export default {
  title: "components/Modal",
  component: Modal,
  parameters: {
    docs: {
      description: {
        component:
          "Cards are used to display content in a consistent and organized way. They can be used to display text, images, and other types of content.",
      },
    },
  },
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args) => (
  // @ts-ignore
  <Modal {...args}>
    <StyledDialogTitle>Title</StyledDialogTitle>
    <StyledDialogDescription>Description</StyledDialogDescription>
  </Modal>
);

export const Default = Template.bind({});
Default.args = {
  children: "Default Modal",
  className: "bg-base-300",
};
