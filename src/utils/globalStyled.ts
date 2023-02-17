type Colors = {
  [key: string]: {
    [key: string]: string;
  };
};

type Shadow = {
  [key: string]: string;
};

export const globalColors: Colors = {
  white: {
    base: "#F0F0F0",
  },
  brown: {
    light: "#EBE7DE",
    base: "#c6a17a",
    dark: "#2b2115",
  },
  black: {
    base: "#141312",
  },
};

export const globalShadow: Shadow = {
  base: `rgba(20, 19, 18, 0.20) 0 8px 15px`,
};
