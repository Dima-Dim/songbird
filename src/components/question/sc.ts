import styled from "styled-components";
import {cssFonts, cssWidth} from "../../styled-components/variables";
import CompanyBtn from "../company-btn/company-btn";

export const questionSC = {
  CONTAINER: styled.section`
    display: grid;
    grid-template-columns: 100px 1fr;
    grid-template-rows: repeat(4, auto);
    gap: 10px;
    align-items: center;
    width: ${cssWidth.mobile.CONTENT_A}%;
    margin: 0 auto 30px;

    @media(min-width: ${cssWidth.tablet.FULL}px) {
      grid-template-columns: 100px 1fr 170px;
    }

    @media(min-width: ${cssWidth.desktop.FULL}px) {
      grid-template-columns: 215px 1fr 170px;
      gap: 0 25px;
      width: ${cssWidth.desktop.CONTENT}px;
    }

    & > h2 {
      grid-column: 1/-1;
      grid-row: 1/2;
      margin: 0;
      padding: 0;
      align-self: start;
      ${cssFonts.h2.normal.BOLD};

      @media(min-width: ${cssWidth.tablet.FULL}px) {
        grid-column: 2/3;
        grid-row: 1/2;
      }
    }

    & > img {
      grid-column: 1/2;
      grid-row: 2/3;
      width: 100%;
      height: 100%;
      object-fit: contain;

      @media(min-width: ${cssWidth.tablet.FULL}px) {
        grid-column: 1/2;
        grid-row: 1/-2;
      }
    }

    & > div {
      grid-column: 2/3;
      grid-row: 2/3;
    }

    & > p {
      grid-column: 1/2;
      margin: 10px 0 0 0;
      padding: 0;
      text-align: center;

      @media(min-width: ${cssWidth.tablet.FULL}px) {
        grid-row: -1/-2;
      }
    }
  `,
  NEXT_STEP_BTN: styled(CompanyBtn)`
    @media(min-width: ${cssWidth.desktop.FULL}px) {
      margin-top: 6px;
    }

    @media(min-width: ${cssWidth.desktop.FULL}px) {
      margin-top: 18px;
    }
  `,
};
