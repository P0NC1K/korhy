export type StyledProps = {
  $iconPosition?: "left" | "right" | "top";
  $iconWeight?: string;
  $iconHeight?: string;
  $textColor?: string;
  $iconColor?: string;
  $titleFontSize?: string;
  $contentFontSize?: string;
  $maxWidth?: string;
};

export type Props = StyledProps & {
  icon?: JSX.Element;
  title?: string;
  content?: string;
  className?: string;
};
