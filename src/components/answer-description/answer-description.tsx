import * as React from "react";
import {answerDescriptionPropsSC as SC} from "./sc";

interface AnswerDescriptionProps {

}

const AnswerDescription: React.FC<AnswerDescriptionProps> = (props) => {
  return (
    <SC.CONTAINER>
      <h2>Ваш ответ</h2>
      <img
        src="https://songbird.onsoft24.com/assets/images/bf3d5eb6-15bf-4945-b5c2-8be72b9736a4.jpg"
        width="100"
        height="50"
        alt="Синица"
      />
      <h3>Синица <span>Parus major</span></h3>
      <SC.AUDIO_PLAYER
        src="https://songbird.onsoft24.com/assets/tracks/volka.mp3"
        canvasWidth={250}
      />
      <p>
        В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от
        вредителей десятки деревьев.
      </p>
    </SC.CONTAINER>
  );
};

export default AnswerDescription;
