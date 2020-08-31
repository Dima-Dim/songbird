import {drawLineSegment} from "../draw-line-segment/draw-line-segment";

export interface StrokeStyle {
  DEFAULT: string;
  READY: string;
}

interface DrawOnCanvasProps {
  normalizedData: number[];
  canvas: HTMLCanvasElement;
  canvasPadding: number;
  lineWidth: number,
  progressPercent?: number;
  strokeStyle: StrokeStyle;
}

export const drawOnCanvas = (props: DrawOnCanvasProps): void => {
  const {
    normalizedData,
    canvas,
    canvasPadding,
    lineWidth,
    progressPercent,
    strokeStyle,
  } = props;

  const ctx = canvas.getContext("2d");

  if (ctx) {
    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

    const width = Math.floor(canvas.offsetWidth / normalizedData.length);

    normalizedData.forEach((it, i) => {
      const x = width * i;
      const height = it * canvas.offsetHeight - canvasPadding * 2;
      const y = (canvas.offsetHeight - height) / 2;

      const isReadyLine = progressPercent && progressPercent > (i / normalizedData.length * 100);
      const currentStrokeStyle = isReadyLine
        ? strokeStyle.READY
        : strokeStyle.DEFAULT;

      drawLineSegment({ctx, x, y, height, lineWidth, strokeStyle: currentStrokeStyle});
    });
  }
};
