import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MainPage as Custom } from "../pages/index";

export default {
  title: "Pages/MainPage",
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Custom>;

export const MainPage: ComponentStory<typeof Custom> = (args) => (
  <div style={{ position: "absolute", top: 0, left: 0, width: "100%" }}>
    <Custom {...args} />
  </div>
);
