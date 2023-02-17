export const decorators = [
  (Story) => (
    <div
      style={{
        width: "100%",
        padding: "40px",
        display: "flex",
        justifyContent: "center",
        fontFamily:
          "Roobert, Roobert, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
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
