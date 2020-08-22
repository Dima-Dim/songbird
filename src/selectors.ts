import {createSelector} from "@reduxjs/toolkit";
import { RootState } from "./store";

const selectQuestionsState = (state: RootState) => state?.questions;

export const selectQuestions = createSelector(
  selectQuestionsState,
  (questionsState) => questionsState?.data
);


const selectGameState = (state: RootState) => state?.game;

export const selectCurrentStep = createSelector(
  selectGameState,
  (questionsState) => questionsState?.currentStep
);
