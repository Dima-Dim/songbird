import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {finishScreenSC as SC} from "./sc";
import {selectCurrentScore, selectQuestionGenres} from "../../selectors";
import {scores} from "../../config";
import {rtkSlices} from "../../reducers/root-reducer";
import CompanyBtn from "../company-btn/company-btn";

const FinishScreen: React.FC = () => {
  const dispatch = useDispatch();

  const currentScore = useSelector(selectCurrentScore);
  const numberOfQuestions = useSelector(selectQuestionGenres)?.length;
  const maxScore = numberOfQuestions * scores.maxForStep;
  const isWinner = currentScore && (currentScore >= maxScore);

  const handleRestartBtnClick = () => {
    dispatch(rtkSlices.game.actions.restartGame());
  };

  const getResultText = () => <p>Вы набрали {currentScore} баллов из {maxScore} возможных.</p>

  const content = isWinner
    ? (
      <>
        <SC.WINNER_TITLE>Поздравляем!</SC.WINNER_TITLE>
        {getResultText()}
        <p>Игра окончена.</p>
      </>
    )
    : (
      <>
        <SC.TITLE>Хороший результат!</SC.TITLE>
        {getResultText()}
        <CompanyBtn
          onClick={handleRestartBtnClick}
        >
          Пройти ещё раз
        </CompanyBtn>
      </>
    )

  return (
    <SC.CONTAINER>
      <h2>Результат игры</h2>
      {content}
    </SC.CONTAINER>
  );
};

export default FinishScreen;
