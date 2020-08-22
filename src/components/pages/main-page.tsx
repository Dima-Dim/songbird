import * as React from "react";
import {useSelector} from "react-redux";
import Header from "../header/header";
import Question from "../question/question";
import AnswerOptions from "../answer-options/answer-options";
import AnswerDescription from "../answer-description/answer-description";
import {mainData} from "../../context/main-data-context";
import {ReduxStateEntities} from "../../reducers/reducers-config";
import useGettingEntity from "../../hooks/use-getting-entity/use-getting-entity";
import {selectQuestions, selectCurrentStep} from "../../selectors";
import {getRandomInt} from "../../utils/get-random-int/get-random-int";
import {QuestionsGenreData} from "../../types/questions-types";

const MainPage: React.FC = () => {
  const {
    getQuestions,
  } = mainData;

  useGettingEntity({currentEntity: ReduxStateEntities.QUESTIONS, fetchFn: getQuestions});

  const questions = useSelector(selectQuestions);
  const currentStep = useSelector(selectCurrentStep);

  const options = questions && Object.entries<QuestionsGenreData>(questions)[currentStep][1]?.options;
  const rightOptionId = getRandomInt(options?.length);
  const rightOption = (rightOptionId || rightOptionId === 0) ? options[rightOptionId] : null;

  return (
    <>
      <Header/>
      <main>
        <Question
          question={rightOption}
        />
        {options && (
          <AnswerOptions
            options={options}
          />
        )}
        <AnswerDescription/>
      </main>
    </>
  );
};

export default MainPage;
