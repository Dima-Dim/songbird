import * as React from "react";
import {QuestionOption} from "../../types/questions-types";
import {assetsUrl} from "../../config";
import UseGettingTextFromUrl from "../../hooks/use-getting-text-from-url/use-getting-text-from-url";
import {answerDescriptionPropsSC as SC} from "./sc";

interface AnswerDescriptionProps {
  option: QuestionOption;
}

const AnswerDescription: React.FC<AnswerDescriptionProps> = (props) => {
  const {
    option,
  } = props;

  const audioSrc = `${assetsUrl.MAIN}/${assetsUrl.AUDIO_FOLDER}/${option.audioFileUrl}`;
  const imageSrc = `${assetsUrl.MAIN}/${assetsUrl.IMAGE_FOLDER}/${option.imageFileUrl}`;
  const textSrc = `${assetsUrl.MAIN}/${assetsUrl.TEXT_FOLDER}/${option.textFileUrl.ru}`;
  const titleRu = option.name.ru;
  const titleEn = option.name.en;

  const description = UseGettingTextFromUrl({url: textSrc});

  return (
    <SC.CONTAINER>
      <h2>Ваш ответ</h2>
      <img
        src={imageSrc}
        alt={titleRu}
      />
      <h3>{titleRu} <span lang="en">({titleEn})</span></h3>
      <SC.AUDIO_PLAYER
        src={audioSrc}
        canvasWidth={100}
        key={audioSrc}
      />
      <p>
        {description}
      </p>
    </SC.CONTAINER>
  );
};

export default AnswerDescription;
