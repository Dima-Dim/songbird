import * as React from "react";
import {drawOnCanvas} from "../../utils/draw-on-canvas/draw-on-canvas";
import {visualizeAudioSC as SC} from "./sc";

interface VisualizeAudioProps {
  src: string;
  audioContext: AudioContext;
  currentAudioTime: number;
  audioDuration: number;
  canvasHeight?: number;
  canvasPadding?: number;
  lineWidth?: number;
  lineGapWidth?: number;
  strokeStyle?: string;
  onProgressRangeChange?: (value: number) => void;
}

const VisualizeAudio: React.FC<VisualizeAudioProps> = (props) => {
  const {
    src,
    audioContext,
    currentAudioTime,
    audioDuration,
    canvasHeight = 50,
    canvasPadding = 0,
    lineWidth = 2,
    lineGapWidth = 1,
    strokeStyle = "#000000",
    onProgressRangeChange,
  } = props;

  const defaultBarsCount = 100;
  const progressPercent = currentAudioTime ? (currentAudioTime / audioDuration * 100).toFixed(2) : 0;

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

  const barsCount = canvas ? Math.floor(canvas?.offsetWidth / (lineWidth + lineGapWidth)) : defaultBarsCount;

  const getNormalizeData = (filteredData: number[]): number[] => {
    const multiplier = Math.max(...filteredData) ** -1;
    return filteredData.map((n) => n * multiplier);
  }

  const getFilterData = (audioBuffer: AudioBuffer): number[] => {
    const rawData = audioBuffer.getChannelData(0);
    const blockSize = Math.floor(rawData.length / barsCount);

    return new Array(barsCount)
      .fill(",")
      .map((it, i) => {
        const blockStart = blockSize * i; // the location of the first sample in the block
        const sum = new Array(blockSize)
          .fill(",")
          .reduce((acc, it2, j) => acc + Math.abs(rawData[blockStart + j]), 0)

        return (sum / blockSize); // divide the sum by the block size to get the average
      });
  };

  if (canvas) {
    fetch(src)
      .then(response => response?.arrayBuffer())
      .then(arrayBuffer => audioContext?.decodeAudioData(arrayBuffer))
      .then(audioBuffer => {
        if (audioBuffer) {
          const filterData = getFilterData(audioBuffer);
          const normalizedData = getNormalizeData(filterData);

          return drawOnCanvas({normalizedData, canvas, canvasPadding, lineWidth, strokeStyle});
        }

        return null;
      })
      .catch((err) => {
        throw new Error(err)
      });
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
