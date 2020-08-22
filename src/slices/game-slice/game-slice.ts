import {createSlice} from "@reduxjs/toolkit";
import {ReduxStateEntities} from "../../reducers/reducers-config";
import {QuestionsGenre} from "../../types/questions-types";

interface gameState {
  currentStep: number;
  currentGenre: QuestionsGenre | null;
  currentAnswer: number | null;
}

const initialState: gameState = {
  currentStep: 0,
  currentGenre: null,
  currentAnswer: null,
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
        stateRTK.currentAnswer = action.payload;
      },
    },
  }
);
