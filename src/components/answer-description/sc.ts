import styled from "styled-components";
import {cssFonts, cssWidth} from "../../styled-components/variables";
import AudioPlayer from "../audio-player/audio-player";

export const answerDescriptionPropsSC = {
  CONTAINER: styled.section`
    display: grid;
    grid-template-columns: 165px 370px 1fr;
    gap: 0 30px;
    width: ${cssWidth.desktop.CONTENT}px;
    margin: 0 auto;

    & > h2 {
      grid-column: 1/-1;
      display: flex;
      align-items: center;
      margin: 0 0 20px 0;
      padding: 0;
      ${cssFonts.h2.normal.BOLD};
    }

    & > h2::after {
      content: "";
      box-sizing: border-box;
      flex-grow: 1;
      width: 1px;
      height: 1px;
      margin-left: 30px;
      background-color: #EDEDED;
    }

    & > img {
      grid-column: 1/2;
      grid-row: 2/4;
    }

    & > h3 {
      grid-column: 2/-1;
      grid-row: 2/3;
      margin: 0 0 20px;
      padding: 0;
      ${cssFonts.h2.normal.BOLD};
    }

    & > p {
      grid-column: -1/-2;
      grid-row: 3/4;
      margin: 0;
      padding: 0;
    }
  `,
  AUDIO_PLAYER: styled(AudioPlayer)`
    grid-column: 2/3;
    grid-row: 3/4;
`,
};
