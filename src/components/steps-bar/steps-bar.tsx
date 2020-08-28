import * as React from "react";
import {useSelector} from "react-redux";
import {stepsBarSC as SC} from "./sc";
import {selectCurrentStep, selectQuestionGenres, selectQuestionGenresTitles} from "../../selectors";

interface StepsBarProps {

}

const StepsBar: React.FC<StepsBarProps> = (props) => {
  const currentStep = useSelector(selectCurrentStep);
  const totalSteps = useSelector(selectQuestionGenres)?.length;
  const activeBarWidth = ((currentStep + 1) / totalSteps) * 100;

  const genres = useSelector(selectQuestionGenresTitles);

  const getItemMemo = React.useCallback((data) => {
    const title = data.title.ru;
    const key = data.title.en;

    return (
      <SC.ITEM
        key={key}
      >
        {title}
      </SC.ITEM>
    );
  }, []);

  return (
    <SC.LIST
      theme={{activeBarWidth}}
    >
      {genres?.map((genre) => getItemMemo(genre[1]))}
    </SC.LIST>
  );
};

export default StepsBar;
