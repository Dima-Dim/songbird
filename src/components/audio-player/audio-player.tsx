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

  const audioPlayer = audioRef?.current;

  if (audioPlayer?.volume) {
    audioPlayer.volume = Number(volume) / 100 || 0.001;
  }

  const handlePause = () => {
    setIsPlayed(false);
  };

  const handlePlay = () => {
    setIsPlayed(true);
  };

  const handlePlayBtnClick = () => {
    if (audioRef.current) {
      if (!isPlayed) {
        audioContext.resume()
          .then(() => audioRef && audioPlayer?.play()
            .catch((error) => console.log(error)))
          .catch((error) => console.log(error));
      } else {
        audioContext.resume()
          .then(() => audioRef && audioPlayer?.pause())
          .catch((error) => console.log(error));
      }
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
      audioPlayer?.pause();
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
          onPause={handlePause}
          onPlay={handlePlay}
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
