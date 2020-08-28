import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import Header from "../header/header";
import Question from "../question/question";
import AnswerOptions from "../answer-options/answer-options";
import AnswerDescription from "../answer-description/answer-description";
import {mainData} from "../../context/main-data-context";
import {ReduxStateEntities} from "../../reducers/reducers-config";
import useGettingEntity from "../../hooks/use-getting-entity/use-getting-entity";
import {selectCurrentStep, selectCurrentOptions, selectCurrentOption, selectCurrentGenre, selectIsFinish, selectQuestionGenres} from "../../selectors";
import {getRandomInt} from "../../utils/get-random-int/get-random-int";
import {rtkSlices} from "../../reducers/root-reducer";
import FinishScreen from "../finish-screen/finish-screen";

const MainPage: React.FC = () => {
  const {
    getQuestions,
  } = mainData;

  useGettingEntity({currentEntity: ReduxStateEntities.QUESTIONS, fetchFn: getQuestions});

  const dispatch = useDispatch();

  const currentStep = useSelector(selectCurrentStep);
  const options = useSelector(selectCurrentOptions);
  const currentGenre = useSelector(selectCurrentGenre);
  const genres = useSelector(selectQuestionGenres);

  const isLastStep = (genres && (currentStep + 1 === genres?.length));

  const isFinish = useSelector(selectIsFinish);

  React.useEffect(() => {
    dispatch(rtkSlices.game.actions.changeCurrentGenre(currentGenre));
  }, [currentGenre])

  const rightOptionId = React.useMemo(() => options && getRandomInt(options?.length), [options, currentStep]);
  const rightOption = options && (rightOptionId || rightOptionId === 0) ? options[rightOptionId] : null;
  const currentOption = useSelector(selectCurrentOption);
  console.log("Правильный ответ: ", rightOption?.name?.ru);
  return (
    <>
      <Header/>
      <main>
        <Question
          question={rightOption}
          isLastStep={isLastStep}
        />
        {options && rightOptionId !== null && (
          <AnswerOptions
            options={options}
            rightOptionId={rightOptionId}
            isLastStep={isLastStep}
          />
        )}
        {currentOption && (
          <AnswerDescription
            option={currentOption}
          />
        )}
        {isFinish && <FinishScreen/>}
      </main>
    </>
  );
};

export default MainPage;
