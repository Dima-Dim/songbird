import * as React from "react";
import VisualizeAudio from "../visualize-audio/visualize-audio";
import {audioVisualization} from "../../config";

interface AudioPlayerProps {
  src: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = (props) => {
  const {
    src,
  } = props;

  const canvasWidth = 650;
  const canvasHeight = 50;

  return (
    <>
      <audio>
        <source
          src={src}
          type="audio/mpeg"
        />
        <track
          kind="captions"
          srcLang="en"
          label="Bird voice"
        />
      </audio>
      <VisualizeAudio
        src={src}
        canvasWidth={canvasWidth}
        canvasHeight={canvasHeight}
        canvasPadding={audioVisualization.CANVAS_PADDING}
        lineWidth={audioVisualization.LINE_WIDTH}
        lineGapWidth={audioVisualization.LINE_GAP_WIDTH}
        strokeStyle={audioVisualization.STROKE_STYLE}
      />
    </>
  );
};

export default AudioPlayer;
