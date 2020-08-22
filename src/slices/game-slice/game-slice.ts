import {createSlice} from "@reduxjs/toolkit";
import {ReduxStateEntities} from "../../reducers/reducers-config";
import {QuestionsGenre} from "../../types/questions-types";
import {scores} from "../../config";

interface gameState {
  currentScore: number;
  currentStep: number;
  stepComplete: boolean;
  currentGenre: QuestionsGenre | null;
  currentAnswer: number | null;
  wrongAnswers: number[],
  rightAnswers?: number,
}

const initialState: gameState = {
  currentScore: 0,
  currentStep: 0,
  currentGenre: null,
  currentAnswer: null,
  wrongAnswers: [],
  stepComplete: false,
};

export const gameSlice = createSlice(
  {
    name: ReduxStateEntities.GAME,
    initialState,
    reducers: {
      changeStep: (stateRTK) => {
        stateRTK.currentStep += 1;
      },
      changeCurrentGenre: (stateRTK, action) => {
        stateRTK.currentGenre = action.payload;
      },
      changeCurrentAnswer: (stateRTK, action) => {
        stateRTK.currentAnswer = action.payload.id;
        if(action.payload.isRight) {
          stateRTK.rightAnswers = action.payload.id;
          stateRTK.stepComplete = true;
          stateRTK.currentScore += scores.maxForStep - stateRTK.wrongAnswers.length;
        } else {
          stateRTK.wrongAnswers.push(action.payload.id);
        }
      },
      changeWrongAnswer: (stateRTK, action) => {
        stateRTK.wrongAnswers.push(action.payload);
      },
    },
  }
);
