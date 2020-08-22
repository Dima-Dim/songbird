import * as React from "react";
import {QuestionOption} from "../../types/questions-types";

interface AnswerOptionProps {
  option: QuestionOption;
  optionId: number;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

const AnswerOption: React.FC<AnswerOptionProps> = (props) => {
  const {
    option,
    optionId,
    onChange,
  } = props;

  const title = option.name.ru;

  return (
    <>
      <input
        id={optionId.toString()}
        type="radio"
        name="answer"
        onChange={onChange}
      />
      <label htmlFor={optionId.toString()}>
        {title}
      </label>
    </>
  );
};

export default AnswerOption;
