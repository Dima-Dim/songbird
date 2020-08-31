import styled from "styled-components";
import {cssFonts, cssWidth} from "../../styled-components/variables";
import {cssMixins} from "../../styled-components/mixins";
import {helperClassNames} from "../../config";

export const answerOptionsSC = {
  CONTAINER: styled.section`
    min-width: ${cssWidth.mobile.CONTENT}px;
    width: ${cssWidth.mobile.CONTENT_A}%;
    margin: 0 auto 30px;

    @media(min-width: ${cssWidth.desktop.FULL}px) {
      width: ${cssWidth.desktop.CONTENT}px;
    }

    & > h2 {
      display: flex;
      align-items: center;
      margin: 0 0 30px 0;
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
  `,
  LIST: styled.ul`
    ${cssMixins.listReset()};
    display: flex;
    flex-wrap: wrap;
    gap: 0 30px;
  `,
  ITEM: styled.li`
    box-sizing: border-box;
    flex-grow: 1;
    flex-shrink: 1;
    width: 100%;

    @media(min-width: ${cssWidth.tablet.FULL}px) {
      width: 40%;
    }

    & > input {
      ${cssMixins.visuallyHidden()};
    }

    & > label {
      box-sizing: border-box;
      position: relative;
      display: block;
      width: 100%;
      padding: 10px 10px 10px 50px;
      ${cssFonts.text.normal.REGULAR};
      text-align: left;
      border-radius: 10px;
    }

    & > input:not(:disabled):hover + label,
    & > input:not(:disabled):focus + label {
      background-color: #EDEDED;
      cursor: pointer;
    }

    &.${helperClassNames.WRONG} > label {
      background-color: #FFE2E0;
    }

    &.${helperClassNames.RIGHT} > label {
      background-color: #DEFAB8;
    }

    & > label::before {
      content: "";
      position: absolute;
      left: 12px;
      top: calc(50% - 16px /2);
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: #ffffff;
      box-shadow: 0 0 1px 1px #A0A0A0
    }

    &:not(.${helperClassNames.WRONG} | .${helperClassNames.RIGHT}) > input:checked ~ label::after {
      content: "";
      position: absolute;
      border-radius: 50%;
      left: 17px;
      top: calc(50% - 6px /2);
      width: 6px;
      height: 6px;
      background-color: #A0A0A0;
    }

    &.${helperClassNames.WRONG} > label::before,
    &.${helperClassNames.RIGHT} > label::before {
      box-shadow: none;
    }

    &.${helperClassNames.WRONG} > input ~ label::after {
      content: "";
      position: absolute;
      top: calc(50% - 12px /2);
      left: 14px;
      width: 12px;
      height: 12px;
      background-image: url("data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cpath d='M.34 10.334l1.246 1.264c.459.465 1.208.47 1.673.012l2.72-2.682 2.681 2.72c.46.465 1.208.47 1.673.011l1.263-1.245c.466-.458.471-1.207.012-1.673l-2.681-2.72 2.72-2.68c.466-.46.471-1.208.012-1.674L10.414.403A1.183 1.183 0 008.74.391l-2.72 2.682L3.338.353A1.184 1.184 0 001.667.34L.403 1.586A1.183 1.183 0 00.391 3.26l2.681 2.72-2.72 2.682a1.182 1.182 0 00-.012 1.673z' fill='%23E13333'/%3E%3C/svg%3E");
      border-radius: 50%;
    }

    &.${helperClassNames.RIGHT} > input ~ label::after {
      content: "";
      position: absolute;
      top: calc(50% - 12px /2);
      left: 14px;
      width: 12px;
      height: 12px;
      background-image: url("data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 11'%3E%3Cpath d='M4.595 10.483a.61.61 0 01-.866 0L.269 7.106c-.359-.36-.359-1.024 0-1.383l1.438-1.437c.359-.36.96-.237 1.319.122l1.267 1.207L9.223.862a.936.936 0 011.315 0l1.193 1.185a.919.919 0 010 1.3l-7.136 7.136z' fill='%2351C780'/%3E%3C/svg%3E");
      border-radius: 50%;
    }
  `,
};
