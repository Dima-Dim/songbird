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
      outline: none;
      appearance: none;
      background: transparent;
      ${cssMixins.animation.SIMPLE()};
    }

    & input[type="range"]::-webkit-slider-runnable-track {
      width: 100%;
      height: 100%;
      ${cssMixins.animation.SIMPLE()};
    }

    & input[type="range"]::-moz-range-track {
      width: 100%;
      height: 100%;
      ${cssMixins.animation.SIMPLE()};
    }

    & input[type="range"]::-webkit-slider-thumb {
      appearance: none;
      width: 3px;
      height: 100%;
      margin: 0;
      background-color: rgba(0, 0, 0, 0.5);
      cursor: grab;
      ${cssMixins.animation.SIMPLE()};
    }

    & label {
      ${cssMixins.visuallyHidden()};
    }
  `,
};
