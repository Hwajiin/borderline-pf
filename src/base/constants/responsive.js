export const breakpoint = {
  md: 768,
  lg: 1200,
};

// 다시 꼼꼼하게 정리 필수
const responsive = {
  gutter: 20,

  columns: {
    sm: 4,
    md: 12,
    lg: 12,
  },

  margin: {
    sm: 5,
    md: 30,
  },

  unit: {
    lg: 75,
  },

  "max-container-size": {
    md: 960,
    lg: 1140,
  },

  device: {
    "above-tablet": `@media screen and (min-width: ${breakpoint.md}px)`,
    "above-desktop": `@media screen and (min-width: ${breakpoint.lg}px)`,
  },

  range: {
    "sm-only": `
        @media screen and (min-width: ${breakpoint.md}px) {
          display: none !important;
        }
      `,

    "md-only": `
        @media screen and (max-width: ${breakpoint.md - 1}px) and (min-width: ${
      breakpoint.lg
    }px) {
          display: none !important;
        }
      `,

    "lg-only": `
        @media screen and (max-width: ${breakpoint.lg - 1}px) {
          display: none !important;
        }
      `,

    "sm-hidden": `
        @media screen and (max-width: ${breakpoint.md - 1}px) {
          display: none !important;
        }
      `,

    "md-hidden": `
        @media screen and (min-width: ${breakpoint.md}px) and (max-width: ${
      breakpoint.lg - 1
    }px) {
          display: none !important;
        }
      `,

    "lg-hidden": `
        @media screen and (min-width: ${breakpoint.lg}px) {
          display: none !important;
        }
      `,
  },
};

export default responsive;
