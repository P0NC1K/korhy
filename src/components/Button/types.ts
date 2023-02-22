export type StyledProps = {
  $variant?: "outlined" | "contained" | "simple";
  $iconPosition?: "left" | "right";
  $background?: string;
  $color?: string;
  $fontSize?: string;
  $size?: "normal" | "small";
  $simpleHover?: "underline" | "contained";
  $fontWeight?:
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | "bold"
    | "bolder"
    | "normal"
    | "lighter";
};

export type Props = StyledProps & {
  label?: string;
  onClick?: () => void;
  icon?: JSX.Element;
  href?: string;
  className?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
};
