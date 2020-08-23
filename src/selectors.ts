import {createSelector} from "@reduxjs/toolkit";
import { RootState } from "./store";

const selectQuestionsState = (state: RootState) => state?.questions;

export const selectQuestions = createSelector(
  selectQuestionsState,
  (questionsState) => questionsState?.data
);

export const selectQuestionGenres = createSelector(
  selectQuestions,
  (questions) => questions && Object.keys(questions)
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

const selectCurrentGenre = createSelector(
  selectGameState,
  (questionsState) => questionsState?.currentGenre
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

export const selectCurrentOptions = createSelector(
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
