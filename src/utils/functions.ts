export const styledFunc = {
  flex: (jc: string, ai: string, fd: string) =>
    `display: flex; 
    justify-content: ${jc};
    align-items: ${ai};
    flex-direction: ${fd};
    `,
  breakpoints: {
    mobile: 320,
    tablet: 768,
    laptop: 1200,
    desktop: 1440,
  },
  media: (value: number) => `@media (max-width: ${value}px)`,
};
