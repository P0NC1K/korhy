import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Paragraph as CustomParagraph } from ".";
import { CupIcon } from "../../public/icons/CupIcon";

export default {
  title: "Components/CustomParagraph",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    $iconPosition: {
      control: { type: "inline-radio" },
      options: ["left", "right", "top"],
    },
  },
} as ComponentMeta<typeof CustomParagraph>;

export const Paragraph: ComponentStory<typeof CustomParagraph> = (args) => (
  <CustomParagraph {...args} icon={<CupIcon />} />
);

Paragraph.args = {
  title: "Latte",
  content:
    "Combinație perfectă între cafeaua fină si laptele dulce cu o textură catifelată.",
  $iconPosition: "left",
  $iconColor: "",
  $textColor: "",
  $titleFontSize: "24px",
  $contentFontSize: "14px",
};
