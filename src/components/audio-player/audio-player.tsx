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

  const [audioPlayer, setAudioPlayer] = useState<HTMLAudioElement>();
  const [isPlayed, setIsPlayed] = useState(false);
  const [volume, setVolume] = useState(DEFAULT_AUDIO_VOLUME);
  const [currentAudioTime, setCurrentAudioTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);

  const handleAudioCanPlay = (evt: React.ChangeEvent<HTMLAudioElement>) => {
    const player = evt.target;

    if (player) {
      setAudioPlayer(player);

      const {duration} = player;

      if (duration && audioDuration !== duration) {
        setAudioDuration(duration);
      }
    }
  };

  if (audioPlayer?.volume) {
    audioPlayer.volume = Number(volume) / 100 || 0.001;
  }

  const handlePause = () => {
    setIsPlayed(false);
  };

  const handlePlay = () => {
    setIsPlayed(true);
  };

  const handleTimeUpdate = (evt: React.ChangeEvent<HTMLAudioElement>) => {
    const roundCurrentTime = Number(evt.target.currentTime.toFixed(2));

    if (currentAudioTime !== roundCurrentTime) {
      setCurrentAudioTime(roundCurrentTime);
    }
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

  const handleProgressRangeChange = (value: number) => {
    const newCurrentTime = audioDuration * value / 100;
    if (audioPlayer) {
      audioPlayer.currentTime = newCurrentTime;
    }
  };

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
          onTimeUpdate={handleTimeUpdate}
          onCanPlay={handleAudioCanPlay}
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
          audioSrc={src}
          audioContext={audioContext}
          audioDuration={audioDuration}
          currentAudioTime={currentAudioTime}
          canvasHeight={canvasHeight}
          canvasPadding={audioVisualization.CANVAS_PADDING}
          lineWidth={audioVisualization.LINE_WIDTH}
          lineGapWidth={audioVisualization.LINE_GAP_WIDTH}
          strokeStyle={audioVisualization.STROKE_STYLE}
          onProgressRangeChange={handleProgressRangeChange}
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
