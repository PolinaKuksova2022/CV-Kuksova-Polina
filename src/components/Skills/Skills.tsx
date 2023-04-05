import React from "react";
import "../styles/main.scss";
import { skills } from "../data/skills";
import { ToolTip } from "../ToolTip/ToolTip";
import { Link } from "react-router-dom";

export const Skills = () => {

  return (
    <div className="skills">
      <>
        <div className="paragraph">Образование</div>
        <p className="title">
          Магистратура по направлению "физико-астрономичсекое образование"
        </p>
        <p className="subtitle">РГПУ им.А.И. Герцена</p>
        <p className="addition">2019-2021, Санкт-Петербург</p>
        <p className="title">
          Бакалавриат по направлению "промышленная электроника"
        </p>
        <p className="subtitle">СПГУ</p>
        <p className="addition">2015-2019, Санкт-Петербург</p>
      </>
      <>
        <div className="paragraph">Опыт работы</div>
        <p className="title">Нет опыта коммерческой разработки</p>
        <p className="title">Преподаватель практики по общей физики</p>
        <p className="subtitle">Университет ИТМО</p>
        <p className="addition">2022, Санкт-Петербург</p>
        <p className="title">Преподаватель физики</p>
        <p className="subtitle">ЧОУ "Школа Гран"</p>
        <p className="addition">2020-2021, Санкт-Петербург</p>
        <p className="title">Инженером по применению электронных компонентов</p>
        <p className="subtitle">Гамма инжиниринг</p>
        <p className="addition">2019, Санкт-Петербург</p>
      </>
      <>
        <div className="paragraph">Ключевые навыки</div>
        <div className="skills-items">
          {skills.map((i) => (
            <div className="skills-item" key={i.name}>
              <a href={i.a}>
                <div className="skills-item__name">{i.name}</div>
              </a>
              <ToolTip text={i.description}>
                <div className="skills-item__img">
                  <img src={i.img} alt={i.name} />
                </div>
              </ToolTip>
            </div>
          ))}
        </div>
      </>
      <Link className="link-btn" to={`/projects`}>
        Проекты
      </Link>
    </div>
  );
};
