export type StyledProps = {
    $iconPosition?: "left" | "right" | "top";
    $textColor?: string;
    $iconColor?: string;
    $titleFontSize?: string;
    $contentFontSize?: string;
}

export type Props = StyledProps & {
    icon?: JSX.Element;
    title?: string;
    content?: string;
    className?: string;
}