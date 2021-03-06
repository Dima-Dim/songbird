import styled from "styled-components";
import {cssMixins} from "../../styled-components/mixins";
import { cssWidth } from "../../styled-components/variables";
import {helperClassNames} from "../../config";

export const audioPlayerSC = {
  CONTAINER: styled.div`

  `,
  PAPER: styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    padding: 10px;
    align-items: center;
    box-shadow: 0 0 30px rgba(219, 221, 222, 0.6);
    border-radius: 10px;

    @media(min-width: ${cssWidth.desktop.FULL}px) {
      gap: 20px;
      padding: 25px;
    }
`,
  PLAY_BTN: styled.button`
    ${cssMixins.buttonReset()};
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #76B6F0;

    & > p {
      ${cssMixins.visuallyHidden()};
    }

    &::before {
      content: "";
      display: block;
      width: 23px;
      height: 23px;
      background-image: url("data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 17'%3E%3Cpath d='M15 6.768c1.333.77 1.333 2.694 0 3.464L3.75 16.727c-1.333.77-3-.192-3-1.732V2.005c0-1.54 1.667-2.502 3-1.732L15 6.768z' fill='%23fff'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: center;
    }

    &.${helperClassNames.ACTIVE}::before {
      background-image: url("data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect width='3.111' height='16' rx='1.556' transform='matrix(-1 0 0 1 8.11 4)' fill='%23fff'/%3E%3Crect width='3.111' height='16' rx='1.556' transform='matrix(-1 0 0 1 19 4)' fill='%23fff'/%3E%3C/svg%3E");
    }
  `,
  VOLUME: styled.div`
    box-sizing: border-box;
    position: relative;
    display: flex;
    align-items: center;
    max-width: 100%;
    height: 24px;
    padding: 0 30px;

    @media(min-width: ${cssWidth.tablet.FULL}px) {
      max-width: 285px;
      margin-left: 25px;
    }

    @media(min-width: ${cssWidth.desktop.FULL}px) {
      max-width: 285px;
      margin-left: 45px;
    }

    & input {
      width: 100%;
      height: 20px;
      margin: 0;
      padding: 0;
      overflow: hidden;
      appearance: none;
    }

    & input[type="range"]::-webkit-slider-runnable-track {
      width: 100%;
      height: 1px;
      background-color: #EDEDED;
    }

    & input[type="range"]::-moz-range-track {
      width: 100%;
      height: 1px;
      background-color: #EDEDED;
    }

    & input[type="range"]::-webkit-slider-thumb {
      appearance: none;
      width: 15px;
      height: 15px;
      margin-top: calc(-14px / 2);
      background-color: #9676F0;
      border-radius: 50%;
      cursor: grab;
      ${() => {
        const sliderWidth = 1000;
        const color = "#9676F0";
        const trackHeight = 1;
        const thumbHeight = 15;
        const shadowSize = `-${(thumbHeight - trackHeight) / 2}px`;

        const str: string[] = [];
        // eslint-disable-next-line no-plusplus
        for(let i = 1; i < sliderWidth; i++) {
          str.push(`-${i}px 0 0 ${shadowSize} ${color}`);
        }

        return `box-shadow: ${str.join(", ")}`;
        }
      }
    }

    & input[type="range"]::-webkit-slider-thumb:active {
      cursor: grabbing;
    }

    & input[type="range"]::-moz-range-thumb {
      appearance: none;
      width: 15px;
      height: 15px;
      background-color: #9676F0;
      border-radius: 50%;
      cursor: grab;
    }

    & input[type="range"]::-moz-range-thumb:active {
      cursor: grabbing;
    }

    & input[type=range]::-moz-range-progress {
      background-color: #9676F0;
      height: 1px;
    }

    & label {
      position: absolute;
      width: 100%;
      left: 0;
      top: 0;
    }

    & label::before {
      content: "";
      position: absolute;
      width: 24px;
      height: 24px;
      background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 5L6 9H2V15H6L11 19V5Z' stroke='%239676F0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M15.54 8.46C16.4774 9.39764 17.004 10.6692 17.004 11.995C17.004 13.3208 16.4774 14.5924 15.54 15.53' stroke='%239676F0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    }

    & label::after {
      content: "";
      position: absolute;
      right: 0;
      width: 24px;
      height: 24px;
      background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 5L6 9H2V15H6L11 19V5Z' stroke='%239676F0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M15.54 8.46C16.4774 9.39764 17.004 10.6692 17.004 11.995C17.004 13.3208 16.4774 14.5924 15.54 15.53' stroke='%239676F0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    }

    & label span {
      ${cssMixins.visuallyHidden()};
    }
  `,
};
