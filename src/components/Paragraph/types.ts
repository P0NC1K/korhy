export type StyledProps = {
  $iconPosition?: "left" | "right" | "top";
  $iconWeight?: string;
  $iconHeight?: string;
  $textColor?: string;
  $iconColor?: string;
  $titleFontSize?: string;
  $contentFontSize?: string;
  $maxWidth?: string;
  $gap?: string;
  $textGap?: string;
};

export type ParagraphProps = StyledProps & {
  icon?: JSX.Element;
  title?: string;
  content?: string;
  className?: string;
};
