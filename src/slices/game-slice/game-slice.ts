import {createSlice} from "@reduxjs/toolkit";
import {ReduxStateEntities} from "../../reducers/reducers-config";
import {QuestionsGenre} from "../../types/questions-types";
import {scores} from "../../config";

interface gameState {
  currentScore: number;
  currentStep: number;
  currentGenre: QuestionsGenre | null;
  currentAnswer: number | null;
  wrongAnswers: number[],
  rightAnswer?: number,
}

const initialState: gameState = {
  currentScore: 0,
  currentStep: 0,
  currentGenre: null,
  currentAnswer: null,
  wrongAnswers: [],
};

export const gameSlice = createSlice(
  {
    name: ReduxStateEntities.GAME,
    initialState,
    reducers: {
      changeStep: (stateRTK) => {
        stateRTK.currentAnswer = null;
        stateRTK.wrongAnswers = [];
        stateRTK.currentStep += 1;
        delete stateRTK.rightAnswer;
      },
      changeCurrentGenre: (stateRTK, action) => {
        stateRTK.currentGenre = action.payload;
      },
      changeCurrentAnswer: (stateRTK, action) => {
        stateRTK.currentAnswer = action.payload.id;
        if(action.payload.isRight) {
          stateRTK.rightAnswer = action.payload.id;
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
