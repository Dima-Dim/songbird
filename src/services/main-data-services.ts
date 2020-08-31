import MainDataApi from "../api/main-data-api";
import MainDataServiceStorage from "./main-data-service-storage";
import {ParsedResponse} from "../types/types";
import {QuestionsData} from "../types/questions-types";

interface MainDataServicesProps {
  api: MainDataApi;
  storage: MainDataServiceStorage;
}

export default class MainDataService {
  private _api: MainDataApi;
  private _storage: MainDataServiceStorage;

  constructor(props: MainDataServicesProps) {
    this._api = props.api;
    this._storage = props.storage;
  }

  getQuestions = (): Promise<ParsedResponse<QuestionsData>> => {
    return this._api.getQuestions()
      .then((response) =>{
        return {
          status: 200,
          data: response,
        };
      });
  };

}
