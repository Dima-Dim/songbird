import * as React from "react";

interface BirdDescriptionProps {

}

const BirdDescription: React.FC<BirdDescriptionProps> = (props) => {
  return (
    <section>
      <h2>Описанием птицы</h2>
      <p>
        Послушайте плеер.
        Выберите птицу из списка
      </p>
      <img src="https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg" alt="Синица"/>
      <h3>Синица</h3>
      Parus major
      <audio>
        <source
          src="https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3"
          type="audio/mpeg"
        />
        <track
          kind="captions"
          srcLang="en"
          label="Bird tit voice"
        />
      </audio>
      <p>
        В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев.
      </p>
    </section>
  );
};

export default BirdDescription;
