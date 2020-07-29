import * as React from "react";

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header>
      <img src="https://birds-quiz.netlify.app/static/media/logo.4f82cd73.svg" alt="Лого SongBird"/>
      <p>Score: 0</p>
      <ul>
        <li>
          <button type="button">Разминка</button>
        </li>
        <li>
          <button type="button">Воробьиные</button>
        </li>
        <li>
          <button type="button">Лесные птицы</button>
        </li>
        <li>
          <button type="button">Певчие птицы</button>
        </li>
        <li>
          <button type="button">Хищные птицы</button>
        </li>
        <li>
          <button type="button">Морские птицы</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
