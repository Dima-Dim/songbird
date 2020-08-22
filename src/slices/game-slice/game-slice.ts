import {createSlice} from "@reduxjs/toolkit";
import {ReduxStateEntities} from "../../reducers/reducers-config";

interface gameState {
  currentStep: number;
  currentAnswer: number | null;
}

const initialState: gameState = {
  currentStep: 0,
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
      changeCurrentAnswer: (stateRTK, action) => {
        stateRTK.currentAnswer = action.payload;
      },
    },
  }
);
