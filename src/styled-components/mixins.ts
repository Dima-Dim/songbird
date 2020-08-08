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
    TRANSITION_GROUP: (props: TransitionGroupProps = {appear: null, enter: null, exit: null}): string => {
      const {
        appear = null,
        enter = null,
        exit = null,
      } = props;

      const getDirection = (data: AnimationDirections, active?: string): string => {
        switch (data) {
          case "bottomToTop":
            return !active ? "translate(0, 50%);" : "transform: translate(0, 0);";

          case "rightToLeft":
            return !active ? "transform: translate(30%, 0);" : "transform: translate(0, 0);";

          default:
            return !active ? "translate(0, 50%);" : "transform: translate(0, 0);";
        }
      }

      return (
        `
        & .transition-appear {
          opacity: 0.01;
          ${getDirection(appear)}
        }

        & .transition-appear-active {
          opacity: 1;
          ${getDirection(appear, `active`)}
        }

        & .transition-enter {
          opacity: 0.01;
          ${getDirection(enter)}
        }

        & .transition-enter-active {
          opacity: 1;
          ${getDirection(enter, `active`)}
        }

        & .transition-exit {
          opacity: 1;
          ${getDirection(exit)}
        }

        & .transition-exit-active {
          margin: 0;
          padding: 0;
          opacity: 0.01;
          ${getDirection(exit, `active`)}
          transition-delay: 0ms, 150ms, 150ms, 150ms;
          transition-property: all, padding, height, margin;
          transition-duration: 500ms, 600ms, 600ms, 600ms;
          transition-timing-function: cubic-bezier(0.0, 0, 0.2, 1), cubic-bezier(1,0,.3,1), cubic-bezier(1,0,.3,1), cubic-bezier(1,0,.3,1);
        }`
      )
    },
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
