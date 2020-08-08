import * as React from "react";
import {answerOptionsSC as SC} from "./sc";

interface AnswerOptionsProps {

}

const AnswerOptions: React.FC<AnswerOptionsProps> = (props) => {
  return (
    <SC.CONTAINER>
      <h2>Выберите правильный вариант</h2>
      <SC.LIST>
        <SC.ITEM>
          <input
            id="Ворон"
            type="radio"
            name="answer"
          />
          <label htmlFor="Ворон">
            Ворон
          </label>
        </SC.ITEM>
        <SC.ITEM>
          <input
            id="Журавль"
            type="radio"
            name="answer"
          />
          <label htmlFor="Журавль">
            Журавль
          </label>
        </SC.ITEM>
        <SC.ITEM>
          <input
            id="Ласточка"
            type="radio"
            name="answer"
          />
          <label htmlFor="Ласточка">
            Ласточка
          </label>
        </SC.ITEM>
        <SC.ITEM>
          <input
            id="Козодой"
            type="radio"
            name="answer"
          />
          <label htmlFor="Козодой">
            Козодой
          </label>
        </SC.ITEM>
        <SC.ITEM>
          <input
            id="Кукушка"
            type="radio"
            name="answer"
          />
          <label htmlFor="Кукушка">
            Кукушка
          </label>
        </SC.ITEM>
        <SC.ITEM>
          <input
            id="Синица"
            type="radio"
            name="answer"
          />
          <label htmlFor="Синица">
            Синица
          </label>
        </SC.ITEM>
      </SC.LIST>
    </SC.CONTAINER>
  );
};

export default AnswerOptions;
