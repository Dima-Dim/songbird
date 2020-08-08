import styled from "styled-components";
import {cssFonts, cssWidth} from "../../styled-components/variables";
import {cssMixins} from "../../styled-components/mixins";

export const answerOptionsSC = {
  CONTAINER: styled.section`
    width: ${cssWidth.desktop.CONTENT}px;
    margin: 0 auto 30px;

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
    width: 40%;

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

    & > label:hover,
    & > label:focus {
      background-color: #EDEDED;
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

    & > input:checked ~ label::after {
      content: "";
      position: absolute;
      left: 17px;
      top: calc(50% - 6px /2);
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #A0A0A0;
    }
  `,
};
