export type StyledProps = {
  $color?: {
    subTitle?: string;
    title?: string;
    brColor?: string;
  };
  $fontSize?: {
    subTitle?: string;
    title?: string;
  };
  $gap?: string;
};

export type TitleProps = {
  title?: string;
  subTitle?: string;
  hasUnderline?: boolean;
};

export type Props = StyledProps & TitleProps;
