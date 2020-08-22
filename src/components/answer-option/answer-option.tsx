import * as React from "react";
import {QuestionOption} from "../../types/questions-types";

interface AnswerOptionProps {
  option: QuestionOption;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

const AnswerOption: React.FC<AnswerOptionProps> = (props) => {
  const {
    option,
    onChange,
  } = props;

  const title = option.name.ru;

  return (
    <>
      <input
        id={title}
        type="radio"
        name="answer"
        onChange={onChange}
      />
      <label htmlFor={title}>
        {title}
      </label>
    </>
  );
};

export default AnswerOption;
