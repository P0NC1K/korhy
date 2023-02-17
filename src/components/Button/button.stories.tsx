import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button as CustomButton } from ".";
import { UserAccountIcon } from "../../public/icons/UserAccountIcon";

export default {
  title: "Components/Button",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    $variant: {
      control: { type: "inline-radio" },
      options: ["contained", "outlined", "simple"],
    },
    $iconPosition: {
      control: { type: "inline-radio" },
      options: ["left", "right"],
    },
  },
} as ComponentMeta<typeof CustomButton>;

export const ButtonSimple: ComponentStory<typeof CustomButton> = (args) => (
  <CustomButton {...args} />
);

export const ButtonIcon: ComponentStory<typeof CustomButton> = (args) => (
  <CustomButton {...args} icon={<UserAccountIcon />} />
);

ButtonSimple.args = {
  $variant: "contained",
  label: "Text example",
  $background: "",
  $color: "",
  $fontWeight: "normal",
  $fontSize: "16px",
};

ButtonIcon.args = {
  label: "Text example",
  $iconPosition: "left",
  $background: "",
  $color: "",
  $fontWeight: "600",
  $fontSize: "16px",
};
