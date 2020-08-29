import * as React from "react";
import {useRef, useState} from "react";
import VisualizeAudio from "../visualize-audio/visualize-audio";
import {audioVisualization, DEFAULT_AUDIO_VOLUME} from "../../config";
import {audioPlayerSC as SC} from "./sc";

interface AudioPlayerProps {
  src: string;
  canvasWidth?: number;
  canvasHeight?: number;
  className?: string;
  togglePause?: boolean;
}

const AudioPlayer: React.FC<AudioPlayerProps> = (props) => {
  const {
    src,
    canvasHeight = 50,
    className,
    togglePause,
  } = props;

  const audioContext = new (window.AudioContext)();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPlayed, setIsPlayed] = useState(false);
  const [volume, setVolume] = useState(DEFAULT_AUDIO_VOLUME);

  if (audioRef?.current?.volume) {
    audioRef.current.volume = Number(volume) / 100 || 0.001;
  }

  const handlePlayBtnClick = () => {
    if (audioRef.current) {
      if (!isPlayed) {
        audioContext.resume()
          .then(() => audioRef && audioRef?.current?.play()
            .catch((error) => console.log(error)))
          .catch((error) => console.log(error));
      } else {
        audioContext.resume()
          .then(() => audioRef && audioRef?.current?.pause())
          .catch((error) => console.log(error));
      }
      setIsPlayed((s) => {
        return !s;
      });
    }
  };

  const handleChangeVolume = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = evt.currentTarget.value;

    if (newVolume !== volume) {
      setVolume(newVolume);
    }
  }

  React.useEffect(() => {
    if (togglePause) {
      audioRef?.current?.pause();
      setIsPlayed(false);
    }
  }, [togglePause]);

  return (
    <SC.CONTAINER
      className={className}
    >
      <SC.PAPER>
        <SC.PLAY_BTN
          type="button"
          onClick={handlePlayBtnClick}
        >
          <p>{isPlayed ? `Pause` : `Play`}</p>
        </SC.PLAY_BTN>
        <audio
          ref={audioRef}
        >
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
          audioContext={audioContext}
          canvasHeight={canvasHeight}
          canvasPadding={audioVisualization.CANVAS_PADDING}
          lineWidth={audioVisualization.LINE_WIDTH}
          lineGapWidth={audioVisualization.LINE_GAP_WIDTH}
          strokeStyle={audioVisualization.STROKE_STYLE}
        />
      </SC.PAPER>
      <SC.VOLUME>
        <>
          <input
            id="volume"
            type="range"
            value={volume}
            onChange={handleChangeVolume}
          />
          <label
            htmlFor="volume"
          >
            <span>Громкость</span>
          </label>
        </>
      </SC.VOLUME>
    </SC.CONTAINER>
  );
};

export default AudioPlayer;
