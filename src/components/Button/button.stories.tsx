import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button as CustomButton } from ".";

export default {
  title: "Components/Button",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    $variant: {
      control: { type: "inline-radio" },
      options: ["contained", "outlined"],
    },
  },
} as ComponentMeta<typeof CustomButton>;

export const Button: ComponentStory<typeof CustomButton> = (args) => (
  <CustomButton {...args} />
);

Button.args = {
  $variant: "contained",
  label: "Text example",
};
