interface DrawLineSegmentProps {
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  height: number,
  lineWidth: number,
  strokeStyle: string,
}

export const drawLineSegment = (props: DrawLineSegmentProps): void => {
  const {
    ctx,
    x,
    y,
    height,
    lineWidth,
    strokeStyle,
  } = props;

  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = strokeStyle;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + height);
  ctx.stroke();
};
