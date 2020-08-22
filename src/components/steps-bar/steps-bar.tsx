import * as React from "react";
import {useSelector} from "react-redux";
import {stepsBarSC as SC} from "./sc";
import {selectCurrentStep, selectQuestionGenres} from "../../selectors";

interface StepsBarProps {

}

const StepsBar: React.FC<StepsBarProps> = (props) => {
  const currentStep = useSelector(selectCurrentStep);
  const totalSteps = useSelector(selectQuestionGenres)?.length;
  const activeBarWidth = ((currentStep + 1) / totalSteps) * 100;

  return (
    <SC.LIST
      theme={{activeBarWidth}}
    >
      <SC.ITEM>
        Разминка
      </SC.ITEM>
      <SC.ITEM>
        Воробьиные
      </SC.ITEM>
      <SC.ITEM>
        Лесные птицы
      </SC.ITEM>
      <SC.ITEM>
        Певчие птицы
      </SC.ITEM>
      <SC.ITEM>
        Хищные птицы
      </SC.ITEM>
      <SC.ITEM>
        Морские птицы
      </SC.ITEM>
    </SC.LIST>
  );
};

export default StepsBar;
