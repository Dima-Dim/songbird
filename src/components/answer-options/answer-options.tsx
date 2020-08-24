import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import classnames from "classnames";
import {useRef} from "react";
import {answerOptionsSC as SC} from "./sc";
import {QuestionOption} from "../../types/questions-types";
import AnswerOption from "../answer-option/answer-option";
import {rtkSlices} from "../../reducers/root-reducer";
import {selectRightOption, selectWrongOptions} from "../../selectors";
import {assetsUrl, helperClassNames} from "../../config";

interface AnswerOptionsProps {
  options: QuestionOption[];
  rightOptionId: number;
}

const AnswerOptions: React.FC<AnswerOptionsProps> = (props) => {
  const {
    options,
    rightOptionId,
  } = props;

  const dispatch = useDispatch();
  const wrongAnswers = useSelector(selectWrongOptions);
  const rightAnswer = useSelector(selectRightOption);
  const isAnswersDisabled = !!rightAnswer;

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const rightAudioSrc = `${assetsUrl.MAIN}/${assetsUrl.AUDIO_FOLDER}/${assetsUrl.RIGHT_ANSWER_AUDIO_FILE}`;
  const wrongAudioSrc = `${assetsUrl.MAIN}/${assetsUrl.AUDIO_FOLDER}/${assetsUrl.WRONG_ANSWER_AUDIO_FILE}`;

  const playAnswerSound = (type: "right" | "wrong") => {
    if (audioRef && audioRef?.current) {
      type === "right"
        ? audioRef.current.setAttribute("src", rightAudioSrc)
        : audioRef.current.setAttribute("src", wrongAudioSrc);

      audioRef.current.play();
    }
  };

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const isRight = rightOptionId.toString() === evt.target.id.toString();
    if (isRight) {
      playAnswerSound("right");
    } else {
      playAnswerSound("wrong");
    }
    dispatch(rtkSlices.game.actions.changeCurrentAnswer({id: evt.target.id, isRight}));
  };

  const getListItem = (data) => {
    return data.map((option, index) => {
      const isRight = rightAnswer?.toString() === index?.toString();
      const isWrong = wrongAnswers?.includes(index?.toString());

      const classNames = classnames({
        [helperClassNames.RIGHT]: isRight,
        [helperClassNames.WRONG]: isWrong,
      });

      return (
        <SC.ITEM
          className={classNames}
          key={option.name.en}
        >
          <AnswerOption
            option={option}
            optionId={index}
            disabled={isWrong}
            onChange={onChange}
          />
        </SC.ITEM>
      );
    })
  };

  return (
    <SC.CONTAINER>
      <h2>Выберите правильный вариант</h2>
      <fieldset
        disabled={isAnswersDisabled}
      >
        <SC.LIST>
          {getListItem(options)}
        </SC.LIST>
      </fieldset>
      <audio
        ref={audioRef}
      >
        <source
          src=""
          type="audio/mpeg"
        />
        <track
          kind="captions"
          srcLang="en"
          label="Answer sound"
        />
      </audio>
    </SC.CONTAINER>
  );
};

export default AnswerOptions;
