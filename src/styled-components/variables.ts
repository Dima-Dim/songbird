import { cssMixins } from "./mixins";

export const cssFonts = {
  h1: {
    normal: {
      LIGHT: cssMixins.normalFont("36px", "44px", "300"),
      REGULAR: cssMixins.normalFont("36px", "44px", "400"),
      BOLD: cssMixins.normalFont("36px", "44px", "700"),
    },
  },
  h2: {
    normal: {
      LIGHT: cssMixins.normalFont("18px", "22px", "300"),
      REGULAR: cssMixins.normalFont("18px", "22px", "400"),
      BOLD: cssMixins.normalFont("18px", "22px", "700"),
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

export const cssWidth = {
  desktop: {
    CONTENT: 1170,
  },
};
