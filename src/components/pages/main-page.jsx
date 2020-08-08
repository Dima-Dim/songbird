import React from "react";
import Header from "../header/header";
import Question from "../question/question";
import AnswerOptions from "../answer-options/answer-options";
import AnswerDescription from "../answer-description/answer-description";

const MainPage = () => {
  return (
    <>
      <Header/>
      <main>
        <Question/>
        <AnswerOptions/>
        <AnswerDescription/>
      </main>
    </>
  );
};

export default MainPage;
