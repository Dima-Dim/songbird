import styled from "styled-components";
import {cssMixins} from "../../styled-components/mixins";

export const visualizeAudioSC = {
  CONTAINER: styled.div`
    position: relative;
    width: 100%;

    & input {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      overflow: hidden;
      appearance: none;
      background: transparent;
      cursor: pointer;
    }

    & input[type="range"]::-webkit-slider-runnable-track {
      width: 100%;
      height: 100%;
    }

    & input[type="range"]::-moz-range-track {
      width: 100%;
      height: 100%;
    }

    & input[type="range"]::-webkit-slider-thumb {
      appearance: none;
      width: 1px;
      height: 100%;
      margin: 0;
      padding: 0;
      background: transparent;
    }

    & label {
      ${cssMixins.visuallyHidden()};
    }
  `,
};
