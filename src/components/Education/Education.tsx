import React from "react";
import "../Styles/main.scss";

export const Education = () => {
  return (
    <article className="education" id="education">
      <h3 className="paragraph">Образование и курсы</h3>
      <ul className="education__items">
        <li className="education__item">
          <p className="education__year">2023 - ...</p>
          <p className="education__grade">Курсы</p>
          <h6 className="education__title">Мидл фронтенд-разработчик</h6>
          <p className="education__subtitle">Яндекс Практикум</p>
        </li>
        <li className="education__item">
          <p className="education__year">2019 - 2021</p>
          <p className="education__grade">Магистратура</p>
          <h6 className="education__title">Физико-астрономическое образование</h6>
          <p className="education__subtitle">РГПУ им. А.И. Герцена</p>
        </li>
        <li className="education__item">
          <p className="education__year">2015-2019</p>
          <p className="education__grade">Бакалавриат</p>
          <h6 className="education__title">
            Промышленная электроника
          </h6>
          <p className="education__subtitle">Санкт-Петербургский горный университет</p>
        </li>
      </ul>
    </article>
  );
};
