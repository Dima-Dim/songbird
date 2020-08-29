import * as React from "react";
import {useSelector} from "react-redux";
import {headerSC as SC} from "./sc";
import StepsBar from "../steps-bar/steps-bar";
import {selectCurrentScore} from "../../selectors";

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = (props) => {
  const currentStep = useSelector(selectCurrentScore);

  return (
    <SC.HEADER>
      <h1>Угадай книгу по отрывку</h1>
      <SC.SCORE_TITLE>Ваш счёт:</SC.SCORE_TITLE>
      <SC.SCORE_COUNT>{currentStep}</SC.SCORE_COUNT>
      <StepsBar/>
    </SC.HEADER>
  );
};

export default Header;
