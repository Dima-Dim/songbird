import * as React from "react";
import VisualizeAudio from "../visualize-audio/visualize-audio";
import {audioVisualization} from "../../config";
import {audioPlayerSC as SC} from "./sc";

interface AudioPlayerProps {
  src: string;
  canvasWidth?: number;
  canvasHeight?: number;
  className?: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = (props) => {
  const {
    src,
    canvasWidth = 100,
    canvasHeight = 50,
    className,
  } = props;

  return (
    <SC.CONTAINER
      className={className}
    >
      <SC.PAPER>
        <SC.PLAY_BTN
          type="button"
        >
          <p>Play</p>
        </SC.PLAY_BTN>
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
      </SC.PAPER>
      <SC.VOLUME>
        <input
          id="volume"
          type="range"
        />
        <label
          htmlFor="volume"
        >
          <span>Громкость</span>
        </label>
      </SC.VOLUME>
    </SC.CONTAINER>
  );
};

export default AudioPlayer;
