import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {finishScreenSC as SC} from "./sc";
import Modal from "../modal/modal";
import {selectCurrentScore, selectQuestionGenres} from "../../selectors";
import {scores} from "../../config";
import {rtkSlices} from "../../reducers/root-reducer";
import CompanyBtn from "../company-btn/company-btn";

interface FinishScreenProps {

}

const FinishScreen: React.FC<FinishScreenProps> = (props) => {
  const dispatch = useDispatch();

  const currentScore = useSelector(selectCurrentScore);
  const numberOfQuestions = useSelector(selectQuestionGenres)?.length;
  const maxScore = numberOfQuestions * scores.maxForStep;
  const isWinner = currentScore && (currentScore >= maxScore);

  const handleRestartBtnClick = () => {
    dispatch(rtkSlices.game.actions.restartGame());
  };

  const getResultText = () => <p>Вы набрал {currentScore} баллов из {maxScore} возможных.</p>

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
    <Modal>
      <SC.CONTAINER>
        <h2>Результат игры</h2>
        {content}
      </SC.CONTAINER>
    </Modal>
  );
};

export default FinishScreen;
