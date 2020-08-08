import * as React from "react";
import {headerSC as SC} from "./sc";
import StepsBar from "../steps-bar/steps-bar";

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <SC.HEADER>
      <h1>Угадай птицу по пению</h1>
      <SC.SCORE_TITLE>Ваш счёт:</SC.SCORE_TITLE>
      <SC.SCORE_COUNT>0</SC.SCORE_COUNT>
      <StepsBar/>
    </SC.HEADER>
  );
};

export default Header;
