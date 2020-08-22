import {createSelector} from "@reduxjs/toolkit";
import { RootState } from "./store";

const selectQuestionsState = (state: RootState) => state?.questions;

export const selectQuestions = createSelector(
  selectQuestionsState,
  (questionsState) => questionsState?.data
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

export const selectStepComplete = createSelector(
  selectGameState,
  (questionsState) => questionsState?.stepComplete
);

const selectCurrentGenre = createSelector(
  selectGameState,
  (questionsState) => questionsState?.currentGenre
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

export const selectRightOptions = createSelector(
  selectGameState,
  (gameState) => gameState?.rightAnswers
);
