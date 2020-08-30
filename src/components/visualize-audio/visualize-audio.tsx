import * as React from "react";
import {drawOnCanvas, StrokeStyle} from "../../utils/draw-on-canvas/draw-on-canvas";
import {visualizeAudioSC as SC} from "./sc";
import useNormalizeAudioData from "../../hooks/use-normalize-audio-data/use-normalize-audio-data";

interface VisualizeAudioProps {
  audioSrc: string;
  audioContext: AudioContext;
  currentAudioTime: number;
  audioDuration: number;
  canvasHeight?: number;
  canvasPadding?: number;
  lineWidth?: number;
  lineGapWidth?: number;
  strokeStyle: StrokeStyle;
  onProgressRangeChange?: (value: number) => void;
}

const VisualizeAudio: React.FC<VisualizeAudioProps> = (props) => {
  const {
    audioSrc,
    audioContext,
    currentAudioTime,
    audioDuration,
    canvasHeight = 50,
    canvasPadding = 0,
    lineWidth = 2,
    lineGapWidth = 1,
    strokeStyle,
    onProgressRangeChange,
  } = props;

  const progressPercent = currentAudioTime ? Number((currentAudioTime / audioDuration * 100).toFixed(2)) : 0;

  const canvasContainerRef = React.useRef<HTMLDivElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [canvas, setCanvas] = React.useState<HTMLCanvasElement | null>(null);

  const [canvasWidth, setCanvasWidth] = React.useState<number>(0);

  React.useEffect(() => {
    const width = canvasContainerRef.current?.offsetWidth;
    if (width) {
      setCanvasWidth(width);
    }
  }, [canvasContainerRef.current?.offsetWidth]);

  React.useEffect(() => {
    if (canvasRef?.current) {
      const renderCtx = canvasRef?.current;
      setCanvas(renderCtx);
    }
  }, [canvasRef]);

  const getBarsCount = React.useCallback(() => {
    return canvas?.offsetWidth && Math.floor(canvas?.offsetWidth / (lineWidth + lineGapWidth));
  }, [canvas?.offsetWidth, lineGapWidth, lineWidth]);

  const normalizeAudioData = useNormalizeAudioData({audioSrc, audioContext, getBarsCountFn: getBarsCount});

  if(canvas && normalizeAudioData.length) {
    drawOnCanvas({normalizedData: normalizeAudioData, canvas, canvasPadding, lineWidth, progressPercent, strokeStyle});
  }

  const handleChangeCurrentAudioTime = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = evt.target;
    if (onProgressRangeChange) {
      onProgressRangeChange(Number(value));
    }
  };

  return (
    <SC.CONTAINER
      ref={canvasContainerRef}
    >
      <canvas
        width={canvasWidth}
        height={canvasHeight}
        ref={canvasRef}
      />
      <input
        id="progress"
        type="range"
        value={progressPercent}
        onChange={handleChangeCurrentAudioTime}
      />
      <label
        htmlFor="progress"
      >
        <span>Прогресс воспроизведения аудио файла</span>
      </label>
    </SC.CONTAINER>
  );
};

export default VisualizeAudio;
