import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Title as CustomTitle } from ".";
import { theme } from "../../utils";

export default {
  title: "Components/CustomTitle",
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof CustomTitle>;

export const Title: ComponentStory<typeof CustomTitle> = (args) => (
  <CustomTitle {...args} />
);

Title.args = {
  title: "Title Example",
  subTitle: "Subtitle Example",
  hasUnderline: true,
  $gap: "12px",
  $fontSize: {
    subTitle: "24px",
    title: "36px",
  },
  $color: {
    subTitle: theme.colors.brown.base,
    title: theme.colors.black.light,
  },
};
