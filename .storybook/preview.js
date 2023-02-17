export const decorators = [
  (Story) => (
    <div
      style={{
        width: "100%",
        padding: "40px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Story />
    </div>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
