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
};

export type TitleProps = {
  title?: string;
  subTitle?: string;
};

export type Props = StyledProps & TitleProps;
