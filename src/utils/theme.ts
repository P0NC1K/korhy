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
      light: "#ffff",
      base: "#F0F0F0",
      darker: "#B5B5B5",
    },
    brown: {
      lighter: "#F0EBDF",
      light: "#EBE7DE",
      base: "#c6a17a",
      darker: "#9c7852",
      dark: "#2b2115",
    },
    black: {
      light: "#292117",
      base: "#141312",
    },
  },
  shadow: {
    base: `rgba(20, 19, 18, 0.20) 0 8px 15px`,
  },
};
