import React from "react";
import Header from "../header/header";
import Question from "../question/question";
import Answers from "../answers/answers";
import BirdDescription from "../bird-description/bird-description";

const MainPage = () => {
  return (
    <>
      <h1>SongBird</h1>
      <Header/>
      <Question/>
      <Answers/>
      <BirdDescription/>
      <button type="button">Next Level</button>
    </>
  );
};

export default MainPage;
