import * as React from "react";
import {useDispatch} from "react-redux";
import {answerOptionsSC as SC} from "./sc";
import { QuestionOption } from "../../types/questions-types";
import AnswerOption from "../answer-option/answer-option";
import {rtkSlices} from "../../reducers/root-reducer";

interface AnswerOptionsProps {
  options: QuestionOption[];
}

const AnswerOptions: React.FC<AnswerOptionsProps> = (props) => {
  const {
    options,
  } = props;

  const dispatch = useDispatch();

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(rtkSlices.game.actions.changeCurrentAnswer(evt.target.id));
  }

  const getListItem = (data) => {
    return data.map((option) => (
      <SC.ITEM key={option.name.en}>
        <AnswerOption
          option={option}
          onChange={onChange}
        />
      </SC.ITEM>
    ))
  };

  return (
    <SC.CONTAINER>
      <h2>Выберите правильный вариант</h2>
      <SC.LIST>
        {getListItem(options)}
      </SC.LIST>
    </SC.CONTAINER>
  );
};

export default AnswerOptions;
