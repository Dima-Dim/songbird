import * as React from "react";
import {drawOnCanvas} from "../../utils/draw-on-canvas/draw-on-canvas";

interface VisualizeAudioProps {
  src: string;
  canvasWidth?: number;
  canvasHeight?: number;
  canvasPadding?: number;
  lineWidth?: number;
  lineGapWidth?: number;
  strokeStyle?: string;
}

const VisualizeAudio: React.FC<VisualizeAudioProps> = (props) => {
  const {
    src,
    canvasWidth = 300,
    canvasHeight = 50,
    canvasPadding = 10,
    lineWidth = 2,
    lineGapWidth = 1,
    strokeStyle = "#000000",
  } = props;

  const audioContext = new (window.AudioContext)();
  const defaultBarsCount = 100;

  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [canvas, setCanvas] = React.useState<HTMLCanvasElement | null>(null);

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

  return (
    <canvas
      width={canvasWidth}
      height={canvasHeight}
      ref={canvasRef}
    />
  );
};

export default VisualizeAudio;
