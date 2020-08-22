import styled from "styled-components";
import {cssMixins} from "../../styled-components/mixins";
import { cssFonts } from "../../styled-components/variables";

export const stepsBarSC = {
  LIST: styled.ul`
    position: relative;
    grid-column: 1/-1;
    display: flex;
    justify-content: space-around;
    ${cssMixins.listReset()};
    padding: 40px 0 0 0;

    &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 20px;
    border-radius: 10px;
    background-color: #EDEDED;
    }

    &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 20px;
    border-radius: 10px;
    background-image: linear-gradient(90deg, #76B6F0 12.65%, #9676F0 50%);

    ${(props) => {
      const str: string[] = [];
      const {activeBarWidth} = props.theme;

    if (activeBarWidth) {
        str.push(`width: ${activeBarWidth}%;`);
      }
      return str.join("\n");
    }};
    }
  `,
  ITEM: styled.li`
    ${cssFonts.text.normal.LIGHT};
  `,
};
