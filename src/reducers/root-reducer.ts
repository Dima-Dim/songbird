import {systemSlice} from "../slices/system-slice/system-slice";
import { getRtkSlice, ReduxStateEntities } from "./reducers-config";
import {QuestionsDataState} from "../types/questions-types";
import { gameSlice } from "../slices/game-slice/game-slice";

const questionReducerData = {
  name: ReduxStateEntities.QUESTIONS,
  initialState: {
    data: null,
    uploaded: false,
    errors: null,
    message: null,
  } as QuestionsDataState,
};

export const rtkSlices = {
  questions: getRtkSlice(questionReducerData),
  game: gameSlice,
  system: systemSlice,
};

export const reducer = {
  systemState: rtkSlices.system.reducer,
  questions: rtkSlices.questions.reducer,
  game: rtkSlices.game.reducer,
};
