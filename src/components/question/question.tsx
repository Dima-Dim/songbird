import * as React from "react";

interface QuestionProps {

}

const Question: React.FC<QuestionProps> = (props) => {
  return (
    <section>
      <h2>Вопрос</h2>
      <img src="https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg" alt="Bird image"/>
      <p>*****</p>
      <audio>
        <source
          src="https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3"
          type="audio/mpeg"
        />
        <track
          kind="captions"
          srcLang="en"
          label="Bird voice"
        />
      </audio>
    </section>
  );
};

export default Question;
