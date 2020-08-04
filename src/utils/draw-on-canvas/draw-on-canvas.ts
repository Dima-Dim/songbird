import {drawLineSegment} from "../draw-line-segment/draw-line-segment";

interface DrawOnCanvasProps {
  normalizedData: number[];
  canvas: HTMLCanvasElement;
  canvasPadding: number;
  lineWidth: number,
  strokeStyle: string;
}

export const drawOnCanvas = (props: DrawOnCanvasProps): void => {
  const {
    normalizedData,
    canvas,
    canvasPadding,
    lineWidth,
    strokeStyle,
  } = props;

  const ctx = canvas.getContext("2d");

  if (ctx) {
    const width = Math.floor(canvas.offsetWidth / normalizedData.length);

    normalizedData.forEach((it, i) => {
      const x = width * i;
      const height = it * canvas.offsetHeight - canvasPadding * 2;
      const y = (canvas.offsetHeight - height) / 2;

      drawLineSegment({ctx, x, y, height, lineWidth, strokeStyle});
    });
  }
};
