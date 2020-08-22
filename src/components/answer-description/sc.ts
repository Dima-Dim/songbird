import styled from "styled-components";
import {cssFonts, cssWidth} from "../../styled-components/variables";
import AudioPlayer from "../audio-player/audio-player";

export const answerDescriptionPropsSC = {
  CONTAINER: styled.section`
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 10px;
    min-width: ${cssWidth.mobile.CONTENT}px;
    width: ${cssWidth.mobile.CONTENT_A}%;
    margin: 0 auto 30px;

    @media(min-width: ${cssWidth.tablet.FULL}px) {
      gap: 20px;
    }

    @media(min-width: ${cssWidth.desktop.FULL}px) {
      grid-template-columns: 165px 370px 1fr;
      gap: 30px;
      width: ${cssWidth.desktop.CONTENT}px;
    }

    & > h2 {
      grid-column: 1/-1;
      display: flex;
      align-items: center;
      margin: 0;
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
      margin: 0;
      padding: 0;
      ${cssFonts.h2.normal.BOLD};
    }

    & > h3 span {
      ${cssFonts.h2.normal.LIGHT};
      font-style: italic;
    }

    & > p {
      grid-column: 1/-1;
      margin: 0;
      padding: 0;
      text-align: justify;

      @media(min-width: ${cssWidth.desktop.FULL}px) {
        grid-column: -1/-2;
        grid-row: 3/4;
      }
    }
  `,
  AUDIO_PLAYER: styled(AudioPlayer)`
    @media(min-width: ${cssWidth.desktop.FULL}px) {
      grid-column: 2/3;
      grid-row: 3/4;
    }
`,
};
