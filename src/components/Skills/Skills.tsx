import React from "react";
import "../styles/main.scss";
import { skills } from "../data/skills";

export const Skills = () => {
  return (
    <article className="skills">
      {/* <section>
        <h3 className="paragraph">Образование</h3>
        <h4 className="title">
          Магистратура по направлению "физико-астрономичсекое образование"
        </h4>
        <h5 className="subtitle">РГПУ им.А.И. Герцена</h5>
        <p className="addition">2019-2021, Санкт-Петербург</p>
        <h4 className="title">
          Бакалавриат по направлению "промышленная электроника"
        </h4>
        <h5 className="subtitle">СПГУ</h5>
        <p className="addition">2015-2019, Санкт-Петербург</p>
      </section>
      <section>
        <h3 className="paragraph">Опыт работы</h3>
        <h4 className="title">Нет опыта коммерческой разработки</h4>
        <h4 className="title">Преподаватель практики по общей физике</h4>
        <h5 className="subtitle">Университет ИТМО</h5>
        <p className="addition">2022, Санкт-Петербург</p>
        <h4 className="title">Преподаватель физики</h4>
        <h5 className="subtitle">ЧОУ "Школа Гран"</h5>
        <p className="addition">2020-2021, Санкт-Петербург</p>
        <h4 className="title">Инженер по применению электронных компонентов</h4>
        <h5 className="subtitle">Гамма инжиниринг</h5>
        <p className="addition">2019, Санкт-Петербург</p>
      </section> */}
      <section>
        <h3 className="paragraph">Ключевые навыки</h3>
        <section className="skills__items">
          {skills.map((i) => (
            <article className="skills__item" key={i.name}>
              <img src={i.img} alt={i.name} />
              <h4>{i.name}</h4>
            </article>
          ))}
        </section>
      </section>
    </article>
  );
};
