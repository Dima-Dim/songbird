export type AnimationDirections = "bottomToTop" | "rightToLeft" | null;

export type TransitionGroupProps = {
  appear?: AnimationDirections;
  enter?: AnimationDirections;
  exit?: AnimationDirections;
}

export const cssMixins = {
  normalFont: (
    normalFontSize = "18px",
    normalFontHeight = "1.35",
    normalFontWeight = "400",
    normalFontStyle = "normal",
    normalFontFamily = `"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif`): string => {
    return (
      `font-size: ${normalFontSize};
      line-height: ${normalFontHeight};
      font-weight: ${normalFontWeight};
      font-family: ${normalFontFamily};
      font-style: ${normalFontStyle};
      letter-spacing: 0.01em;
    `);
  },
  animation: {
    SIMPLE: (duration = "200"): string => {
      return (
        `
      transition-property: all;
      transition-duration: ${duration}ms;
      transition-timing-function: cubic-bezier(0.0, 0, 0.2, 1);`
      )
    },
  },
  buttonReset: (): string => {
    return (
      `
      padding: 0;
      border: none;
      background-color: transparent;
      cursor: pointer;`
    )
  },
  listReset: (): string => {
    return (
      `
        padding: 0;
        margin: 0;
        list-style: none`
    )
  },
  visuallyHidden: (): string => (
    `
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
    `
  ),
};
