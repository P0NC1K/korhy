import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header as CustomHeader } from ".";
import { UserAccountIcon } from "../../public/icons/UserAccountIcon";

export default {
  title: "Components/Header",
  parameters: {
    layout: "fullscreen",
  }
} as ComponentMeta<typeof CustomHeader>;

export const Header: ComponentStory<typeof CustomHeader> = () => (
  <CustomHeader />
);
