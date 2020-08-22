export type QuestionsGenre = "FANTASY" | "CHILDREN" | "DETECTIVES" | "FANTASTIC" | "NOVELS" | "CLASSIC"

export interface QuestionsGenreData {
  title: {
    ru: string;
    en: string
  };
  options: QuestionOption[];
}

export interface QuestionOption {
  audioFileUrl: string;
  imageFileUrl: string;
  textFileUrl: {
    ru: string;
  };
  author: {
    en: string;
    ru: string;
  },
  name: {
    en: string,
    ru: string,
  },
}

export type QuestionsData = Record<QuestionsGenre, QuestionsGenreData>;

export type QuestionsDataState = {
  data: QuestionsData | null,
  uploaded: boolean;
  errors: string[] | null;
  message: string | null;
};
