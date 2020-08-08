import styled from "styled-components";
import {cssFonts, cssWidth} from "../../styled-components/variables";

export const headerSC = {
  HEADER: styled.header`
    display: grid;
    grid-template-columns: 1fr max-content max-content;
    grid-row: auto;
    gap: 20px;
    align-items: center;
    width: ${cssWidth.desktop.CONTENT}px;
    margin: 0 auto 20px;
    padding: 20px 0;

    & h1 {
      margin: 0;
      padding: 0;
      ${cssFonts.h1.normal.BOLD};
    }
  `,
  SCORE_TITLE: styled.p`
    margin: 0;
    padding: 0;
    ${cssFonts.text.normal.REGULAR};
  `,
  SCORE_COUNT: styled.div`
    position: relative;
    box-sizing: border-box;
    min-width: 170px;
    padding: 15px;
    color: #EDEDED;
    ${cssFonts.text.large.BOLD};
    text-align: right;
    background-color: #9676F0;
    background-image: url("data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 41'%3E%3Cpath d='M10.412 19.672a9.26 9.26 0 100-18.52 9.26 9.26 0 000 18.52z' fill='%23FFD064'/%3E%3Cpath d='M14.748 2.23A9.26 9.26 0 012.23 14.748 9.26 9.26 0 1014.748 2.23z' fill='%23FFC250'/%3E%3Cpath d='M10.412 20.824C4.67 20.824 0 16.154 0 10.412 0 4.67 4.67 0 10.412 0c5.741 0 10.412 4.67 10.412 10.412 0 5.741-4.67 10.412-10.412 10.412zm0-18.52c-4.47 0-8.108 3.637-8.108 8.108 0 4.47 3.637 8.108 8.108 8.108 4.47 0 8.108-3.637 8.108-8.108 0-4.47-3.637-8.108-8.108-8.108z' fill='%23FFE07D'/%3E%3Cpath d='M10.816 6.065l.919 1.86a.45.45 0 00.339.247l2.054.299a.45.45 0 01.25.768l-1.487 1.449a.45.45 0 00-.13.399l.352 2.045a.45.45 0 01-.654.475l-1.837-.965a.45.45 0 00-.42 0l-1.836.965a.45.45 0 01-.654-.475l.35-2.045a.45.45 0 00-.13-.399L6.448 9.239a.45.45 0 01.25-.768l2.053-.299a.451.451 0 00.34-.246l.918-1.861a.45.45 0 01.808 0z' fill='%23F4FBFF'/%3E%3Cpath d='M23.173 38.406c7.523 0 13.621-6.098 13.621-13.621 0-7.523-6.098-13.621-13.621-13.621-7.523 0-13.621 6.098-13.621 13.62 0 7.524 6.098 13.622 13.621 13.622z' fill='%23FFD064'/%3E%3Cpath d='M30.15 13.084a13.557 13.557 0 011.92 6.977c0 7.523-6.098 13.622-13.62 13.622-2.55 0-4.937-.702-6.977-1.921 2.377 3.979 6.727 6.644 11.7 6.644 7.523 0 13.621-6.098 13.621-13.621 0-4.973-2.665-9.323-6.644-11.7z' fill='%23FFC250'/%3E%3Cpath d='M23.173 41c-8.941 0-16.215-7.274-16.215-16.215 0-8.941 7.274-16.215 16.215-16.215 8.94 0 16.215 7.274 16.215 16.215 0 8.94-7.274 16.215-16.215 16.215zm0-28.366c-6.7 0-12.151 5.45-12.151 12.15 0 6.701 5.45 12.152 12.151 12.152 6.7 0 12.151-5.45 12.151-12.151 0-6.7-5.45-12.151-12.151-12.151z' fill='%23FFE07D'/%3E%3Cpath d='M33.465 12.264a16.14 16.14 0 013.694 10.292c0 8.94-7.274 16.215-16.215 16.215a16.14 16.14 0 01-10.292-3.694C13.628 38.69 18.136 41 23.173 41c8.94 0 16.215-7.274 16.215-16.215 0-5.037-2.309-9.545-5.923-12.521z' fill='%23FFD064'/%3E%3Cpath d='M23.767 18.39l1.351 2.738a.663.663 0 00.5.363l3.02.438c.544.08.761.748.368 1.131l-2.186 2.13a.663.663 0 00-.19.588l.515 3.008a.663.663 0 01-.962.7l-2.702-1.421a.663.663 0 00-.617 0l-2.702 1.42a.663.663 0 01-.961-.699l.515-3.008a.662.662 0 00-.19-.587l-2.186-2.13a.663.663 0 01.367-1.132l3.021-.438a.663.663 0 00.5-.363l1.35-2.738a.663.663 0 011.19 0z' fill='%23F4FBFF'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: 40px 41px;
    background-position: 15px 50%;
    border: 1px solid #FFFFFF;
    border-radius: 10px;

    & > svg {
      position: absolute;
      left: 15px;
    }
  `,
};
