import * as React from "react";
import {useSelector} from "react-redux";
import classNames from "classnames";
import {stepsBarSC as SC} from "./sc";
import {selectCurrentStep, selectQuestionGenres, selectQuestionGenresTitles} from "../../selectors";
import {helperClassNames} from "../../config";

const StepsBar: React.FC = () => {
  const currentStep = useSelector(selectCurrentStep);
  const totalSteps = useSelector(selectQuestionGenres)?.length;
  const activeBarWidth = ((currentStep + 1) / totalSteps) * 100;

  const genres = useSelector(selectQuestionGenresTitles);

  const getItemMemo = React.useCallback(({data, currentIndex}) => {
    const title = data.title.ru;
    const key = data.title.en;

    const itemClassNames = classNames({
      [helperClassNames.ACTIVE]: currentStep === currentIndex,
    });

    return (
      <SC.ITEM
        className={itemClassNames}
        key={key}
      >
        {title}
      </SC.ITEM>
    );
  }, [currentStep]);

  return (
    <SC.LIST
      theme={{activeBarWidth}}
    >
      {genres?.map((genre, currentIndex) => getItemMemo({data: genre[1], currentIndex}))}
    </SC.LIST>
  );
};

export default StepsBar;
