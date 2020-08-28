import styled from "styled-components";
import {cssMixins} from "../../styled-components/mixins";
import {cssFonts, cssWidth} from "../../styled-components/variables";
import {helperClassNames} from "../../config";

export const companyBtnSC = {
  BTN: styled.button`
    ${cssMixins.buttonReset()};
    position: relative;
    box-sizing: border-box;
    grid-column: 1/-1;
    align-self: start;
    max-width: 100%;
    margin: 0;
    padding: 12px 24px 12px;
    color: #ffffff;
    ${cssFonts.h2.normal.BOLD};
    text-align: left;
    background-image: url("data:image/svg+xml,%3Csvg width='63' height='70' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M61.662 33.922L29.618.444A1.425 1.425 0 0028.587 0H2.37C1.565-.002.912.679.91 1.52c0 .404.154.793.428 1.08L32.353 35 1.338 67.4a1.57 1.57 0 00-.002 2.153c.274.287.646.448 1.034.447h26.217c.387 0 .758-.16 1.031-.444l32.044-33.479a1.57 1.57 0 000-2.154z' fill='rgba(237, 237, 237, 0.2)'/%3E%3C/svg%3E"), linear-gradient(90deg, #76B6F0 12.65%, #9676F0 50%);
    background-repeat: no-repeat;
    background-position: right;
    border-radius: 10px;

    &:not(.${helperClassNames.ACTIVE}) {
      filter: grayscale();
    }

    @media(min-width: ${cssWidth.tablet.FULL}px) {
      grid-column: -1/-2;
      grid-row: 2/3;
    }

    &::before {
      content: "";
      position: absolute;
      right: 20px;
      top: -20%;
      width: 70px;
      height: 140%;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 87 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M86.2666 48.4608L40.8317 0.634854C40.4437 0.227246 39.9177 -0.00101515 39.3696 3.87124e-06H2.19567C1.05509 -0.00223797 0.128842 0.9695 0.126712 2.17011C0.125744 2.74891 0.344141 3.30428 0.733499 3.71311L44.7102 50.0001L0.733499 96.2869C-0.0740654 97.1347 -0.0756141 98.5112 0.72982 99.3613C1.11821 99.7711 1.64581 100.001 2.19567 100H39.3696C39.9177 100.001 40.4437 99.7728 40.8317 99.3652L86.2666 51.539C87.0741 50.6912 87.0757 49.3147 86.2702 48.4646C86.2689 48.4634 86.2677 48.4622 86.2666 48.4608Z' fill='rgba(237, 237, 237, 0.5)'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      z-index: -1;

      @media(min-width: ${cssWidth.tablet.FULL}px) {
        width: 87px;
        height: 140%;
      }

      @media(min-width: ${cssWidth.desktop.FULL}px) {
        width: 95px;
        height: 140%;
      }
    }
  `,
};
