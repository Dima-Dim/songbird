import * as React from "react";

interface UseNormalizeAudioDataProps {
  audioSrc: string;
  audioContext: AudioContext;
  getBarsCountFn: () => number | undefined;
}

const useNormalizeAudioData = (props: UseNormalizeAudioDataProps): number[] => {
  const {
    audioSrc,
    audioContext,
    getBarsCountFn,
  } = props;

  const [normalizedAudionData, setNormalizedAudioData] = React.useState<number[]>([]);

  const getNormalizeData = React.useCallback((filteredData: number[]): number[] => {
    const multiplier = Math.max(...filteredData) ** -1;
    return filteredData.map((n) => n * multiplier);
  }, []);

  const getFilterData = React.useCallback((data: { audioBuffer: AudioBuffer, linesCount }): number[] => {
    const {
      audioBuffer,
      linesCount,
    } = data;

    const rawData = audioBuffer.getChannelData(0);
    const blockSize = Math.floor(rawData.length / linesCount);

    return new Array(linesCount)
      .fill(",")
      .map((it, i) => {
        const blockStart = blockSize * i; // the location of the first sample in the block
        const sum = new Array(blockSize)
          .fill(",")
          .reduce((acc, it2, j) => acc + Math.abs(rawData[blockStart + j]), 0)

        return (sum / blockSize); // divide the sum by the block size to get the average
      });
  }, []);

  const setNormalizedAudioDataCallback = React.useCallback((data) => {
    const {
      src,
      audioCtx,
      filterDataFn,
      normalizeDataFn,
      linesCount,
    } = data;

    fetch(src)
      .then(response => response?.arrayBuffer())
      .then(arrayBuffer => audioCtx?.decodeAudioData(arrayBuffer))
      .then(audioBuffer => {
        if (audioBuffer) {
          const filterData = filterDataFn({audioBuffer, linesCount});
          const normalizedData = normalizeDataFn(filterData);

          return setNormalizedAudioData(normalizedData);
        }

        return setNormalizedAudioData([]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    const barsCount = getBarsCountFn();
    if (barsCount) {
      setNormalizedAudioDataCallback({
        src: audioSrc,
        audioCtx: audioContext,
        filterDataFn: getFilterData,
        normalizeDataFn: getNormalizeData,
        linesCount: barsCount,
      });
    }
  }, [audioSrc, setNormalizedAudioDataCallback, getBarsCountFn, getFilterData, getNormalizeData]);

  return normalizedAudionData;
};

export default useNormalizeAudioData;
