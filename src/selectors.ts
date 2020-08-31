import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "./store";
import {QuestionsGenreData} from "./types/questions-types";

const selectQuestionsState = (state: RootState) => state?.questions;

export const selectQuestions = createSelector(
  selectQuestionsState,
  (questionsState) => questionsState?.data
);

export const selectQuestionGenres = createSelector(
  selectQuestions,
  (questions) => questions && Object.keys(questions)
);

export const selectQuestionGenresTitles = createSelector(
  selectQuestions,
  (questions) => questions && Object.entries(questions)
);

const selectGameState = (state: RootState) => state?.game;

export const selectCurrentScore = createSelector(
  selectGameState,
  (questionsState) => questionsState?.currentScore
);

export const selectCurrentStep = createSelector(
  selectGameState,
  (questionsState) => questionsState?.currentStep
);

export const selectIsFinish = createSelector(
  selectGameState,
  (questionsState) => questionsState?.isFinish
);

export const selectCurrentOptions = createSelector(
  selectQuestions,
  selectCurrentStep,
  (questionsSrc, currentStep) => {
    if (questionsSrc) {
      const questions = Object.entries<QuestionsGenreData>(questionsSrc)
      const questionIndex = currentStep < (questions.length - 1)
        ? currentStep
        : (questions?.length - 1);

      return questions[questionIndex][1]?.options
    }

    return null;
  }
);

export const selectCurrentGenre = createSelector(
  selectQuestions,
  selectCurrentStep,
  (questionsSrc, currentStep) => {
    if (questionsSrc) {
      const questions = Object.entries<QuestionsGenreData>(questionsSrc)
      const questionIndex = currentStep < (questions.length - 1)
        ? currentStep
        : (questions?.length - 1);

      return questions[questionIndex][0]
    }

    return null;
  }
);

export const selectOptionsForCurrentGenre = createSelector(
  selectQuestions,
  selectCurrentGenre,
  (questions, currentGenre) => currentGenre && questions[currentGenre]?.options
);

const selectCurrentOptionId = createSelector(
  selectGameState,
  (questionsState) => questionsState?.currentAnswer
);

export const selectCurrentOption = createSelector(
  selectCurrentGenre,
  selectCurrentOptionId,
  selectQuestions,
  (currentGenre, currentOptionId, questions) => currentOptionId && currentGenre && questions && questions[currentGenre].options[currentOptionId]
);

export const selectWrongOptions = createSelector(
  selectGameState,
  (gameState) => gameState?.wrongAnswers
);

export const selectRightOption = createSelector(
  selectGameState,
  (gameState) => gameState?.rightAnswer
);
