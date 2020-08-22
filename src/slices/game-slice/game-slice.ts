import {createSlice} from "@reduxjs/toolkit";
import {ReduxStateEntities} from "../../reducers/reducers-config";
import {QuestionsGenre} from "../../types/questions-types";

interface gameState {
  currentStep: number;
  stepComplete: boolean;
  currentGenre: QuestionsGenre | null;
  currentAnswer: number | null;
  wrongAnswers: number[],
  rightAnswers?: number,
}

const initialState: gameState = {
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
