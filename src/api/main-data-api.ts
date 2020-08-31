import {QuestionsData} from "../types/questions-types";
import { questions } from "../data/questions";

export default class MainDataApi {
  getQuestions = (): Promise<QuestionsData> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(questions);
      }, 0);
    });
  };
}
