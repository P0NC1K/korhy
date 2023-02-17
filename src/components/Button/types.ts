export type StyledProps = {
  $variant?: "outlined" | "contained";
};

export type Props = StyledProps & {
  label: string;
  onClick?: () => void;
};
