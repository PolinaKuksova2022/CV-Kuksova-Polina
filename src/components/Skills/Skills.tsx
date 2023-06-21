import React from "react";
import "../styles/main.scss";
import { skills } from "../data/skills";
import { ToolTip } from "../ToolTip/ToolTip";
import { Link } from "react-router-dom";

export const Skills = () => {

  return (
    <article className="skills">
      <section>
        <h3 className="paragraph">Образование</h3>
        <h4 className="title">
          Магистратура по направлению "физико-астрономичеcкое образование"
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
      </section>
      <section>
        <h3 className="paragraph">Ключевые навыки</h3>
        <section className="skills-items">
          {skills.map((i) => (
            <article className="skills-item" key={i.name}>
              <a href={i.a}>
                <div className="skills-item__name">{i.name}</div>
              </a>
              <ToolTip text={i.description}>
                <div className="skills-item__img">
                  <img src={i.img} alt={i.name} />
                </div>
              </ToolTip>
            </article>
          ))}
        </section>
      </section>
      <Link className="link-btn" to={`/projects`}>
        Проекты
      </Link>
    </article>
  );
};
