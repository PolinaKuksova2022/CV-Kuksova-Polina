import React from "react";
import "../Styles/main.scss";

export const Experience = () => {
  return (
    <article className="experience" id="experience">
      <h3 className="paragraph">Опыт работы</h3>
      <ul className="experience__items">
        <li className="experience__item">
          <p>2022</p>
          <p>Санкт-Петербург</p>
          <h6 className="experience__post">Преподаватель практики по общей физике</h6>
          <p>Университет ИТМО</p>
        </li>
        <li className="experience__item">
          <p>2020-2021</p>
          <p>Санкт-Петербург</p>
          <h6 className="experience__post">Преподаватель физики</h6>
          <p>ЧОУ "Школа Гран"</p>
        </li>
        <li className="experience__item">
          <p>2019</p>
          <p>Санкт-Петербург</p>
          <h6 className="experience__post">Инженер по применению электронных компонентов</h6>
          <p>Гамма инжиниринг</p>
        </li>
      </ul>
    </article>
  );
};
