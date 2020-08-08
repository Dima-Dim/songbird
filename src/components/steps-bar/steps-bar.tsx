import * as React from "react";
import {stepsBarSC as SC} from "./sc";

interface StepsBarProps {

}

const StepsBar: React.FC<StepsBarProps> = (props) => {
  const currentStep = 1;
  const stepWidth = 170;
  const activeBarWidth = currentStep * stepWidth;

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
