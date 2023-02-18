import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Footer as Custom } from ".";

export default {
  title: "Components/Footer",
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Custom>;

export const Footer: ComponentStory<typeof Custom> = (args) => (
  <div style={{ position: "absolute", top: 0, left: 0, width: "100%" }}>
    <Custom {...args} />
  </div>
);
