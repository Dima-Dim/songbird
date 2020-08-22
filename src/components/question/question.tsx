import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import classnames from "classnames";
import AudioPlayer from "../audio-player/audio-player";
import {questionSC as SC} from "./sc";
import {QuestionOption} from "../../types/questions-types";
import {assetsUrl, helperClassNames} from "../../config";
import {selectStepComplete} from "../../selectors";
import {rtkSlices} from "../../reducers/root-reducer";

interface QuestionProps {
  question: QuestionOption | null;
}

const Question: React.FC<QuestionProps> = (props) => {
  const {
    question,
  } = props;

  const dispatch = useDispatch();

  const stepComplete = useSelector(selectStepComplete);
  const audioSrc = question && `${assetsUrl.MAIN}/${assetsUrl.AUDIO_FOLDER}/${question.audioFileUrl}`;

  const nextStepBtnClassNames = classnames({
    [helperClassNames.ACTIVE]: stepComplete,
  });

  const handleNextStepBtnClick = () => {
    dispatch(rtkSlices.game.actions.changeStep());
  };

  return (
    <SC.CONTAINER>
      <h2>Прослушайте плеер</h2>
      <img
        src="data:image/svg+xml,%3Csvg width='212' height='212' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)'%3E%3Cpath d='M110.024 132.456c0 6.424-5.226 11.639-11.674 11.639-6.448 0-11.674-5.215-11.674-11.639 0-6.429 5.226-11.64 11.674-11.64 6.448 0 11.674 5.211 11.674 11.64zM105.363 10h-7.2c-19.455 0-35.537 14.692-37.664 33.531a3.83 3.83 0 003.81 4.258h15.496c1.798 0 3.39-1.234 3.755-2.99 1.392-6.765 7.412-11.872 14.603-11.872h7.2c8.234 0 14.906 6.657 14.906 14.862v.431c0 5.6-3.129 10.782-8.168 13.26a45.945 45.945 0 00-18.766 16.982 45.768 45.768 0 00-6.912 24.186v5.476a3.828 3.828 0 003.834 3.824h15.33a3.83 3.83 0 003.834-3.824v-5.476c0-8.781 5.065-16.71 12.941-20.648a37.854 37.854 0 0015.214-13.864 37.684 37.684 0 005.687-19.916v-.43c0-20.87-16.966-37.79-37.9-37.79z' fill='%23333'/%3E%3Cpath d='M74.552 155.423c2.769 4.264 1.56 9.969-2.706 12.739-4.265 2.77-9.97 1.554-12.739-2.709-2.77-4.267-1.559-9.97 2.706-12.74 4.265-2.77 9.968-1.556 12.739 2.71zM18.693 76.158l-4.762 3.093C1.06 87.61-3.244 104.267 3.467 117.683a3.027 3.027 0 004.356 1.19l10.25-6.657c1.19-.773 1.71-2.275 1.195-3.598-1.994-5.087-.213-11.062 4.544-14.151l4.762-3.093c5.447-3.537 12.729-1.986 16.265 3.46l.186.286c2.414 3.716 2.578 8.499.312 12.307a36.282 36.282 0 00-5.094 19.332 36.306 36.306 0 005.85 19.021l2.36 3.634a3.024 3.024 0 004.185.89l10.14-6.585a3.027 3.027 0 00.89-4.185l-2.36-3.634c-3.785-5.827-3.852-13.264-.34-19.262a29.896 29.896 0 00-.732-31.396l-.186-.286c-8.994-13.85-27.51-17.79-41.357-8.798z' fill='%23A0A0A0'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Cpath fill='%23fff' d='M0 0h212v212H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
        width="212"
        height="212"
        alt="Bird"
      />
      <p>*****</p>
      {audioSrc && (
        <AudioPlayer
          src={audioSrc}
        />
      )}
      <SC.NEXT_STEP_BTN
        className={nextStepBtnClassNames}
        type="button"
        disabled={!stepComplete}
        onClick={handleNextStepBtnClick}
      >
        Следующий вопрос
      </SC.NEXT_STEP_BTN>
    </SC.CONTAINER>
  );
};

export default Question;
