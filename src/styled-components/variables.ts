import { cssMixins } from "./mixins";

export const cssWidth = {
  mobile: {
    FULL: 320,
    CONTENT: 290,
    CONTENT_A: 90.625,
  },
  tablet: {
    FULL: 768,
    CONTENT: 700,
    CONTENT_A: 91.15,
  },
  desktop: {
    FULL: 1200,
    CONTENT: 1170,
  },
};

export const cssFonts = {
  h1: {
    normal: {
      LIGHT: cssMixins.normalFont("36px", "44px", "300"),
      REGULAR: cssMixins.normalFont("36px", "44px", "400"),
      BOLD: `
        ${cssMixins.normalFont("20px", "24px", "700")}

        @media(min-width: ${cssWidth.desktop.FULL}px) {
          ${cssMixins.normalFont("30px", "36px", "700")};
        }

        @media(min-width: ${cssWidth.desktop.FULL}px) {
          ${cssMixins.normalFont("36px", "44px", "700")};
        }
      `,
    },
  },
  h2: {
    normal: {
      LIGHT: cssMixins.normalFont("18px", "22px", "300"),
      REGULAR: cssMixins.normalFont("18px", "22px", "400"),
      BOLD: `
        ${cssMixins.normalFont("16px", "20px", "700")}

        @media(min-width: ${cssWidth.desktop.FULL}px) {
          ${cssMixins.normalFont("18px", "22 px", "700")};
        }

        @media(min-width: ${cssWidth.desktop.FULL}px) {
          ${cssMixins.normalFont("18px", "22px", "700")};
        }
      `,
    },
  },
  text: {
    normal: {
      LIGHT: cssMixins.normalFont("18px", "24px", "300"),
      REGULAR: cssMixins.normalFont("18px", "24px", "400"),
      BOLD: cssMixins.normalFont("18px", "24px", "700"),
    },
    large: {
      BOLD: cssMixins.normalFont("24px", "29px", "700")
    },
  }
};
