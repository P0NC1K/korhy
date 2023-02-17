type Theme = {
  colors: {
    [key: string]: {
      [key: string]: string;
    };
  };
  shadow: {
    [key: string]: string;
  };
};

export const theme: Theme = {
  colors: {
    white: {
      base: "#F0F0F0",
    },
    brown: {
      light: "#EBE7DE",
      base: "#c6a17a",
      darker: "#9c7852",
      dark: "#2b2115",
    },
    black: {
      base: "#141312",
    },
  },
  shadow: {
    base: `rgba(20, 19, 18, 0.20) 0 8px 15px`,
  },
};
