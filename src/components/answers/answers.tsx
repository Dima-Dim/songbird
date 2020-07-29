import * as React from "react";

interface AnswersProps {

}

const Answers: React.FC<AnswersProps> = (props) => {
  return (
    <ul>
      <li>
        <button type="button">Ворон</button>
      </li>
      <li>
        <button type="button">Журавль</button>
      </li>
      <li>
        <button type="button">Ласточка</button>
      </li>
      <li>
        <button type="button">Козодой</button>
      </li>
      <li>
        <button type="button">Кукушка</button>
      </li>
      <li>
        <button type="button">Синица</button>
      </li>
    </ul>
  );
};

export default Answers;
