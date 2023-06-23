import React from "react";
import "../Styles/main.scss";
import { projects } from "../data/projects";

export const Projects = () => {
  return (
    <article className="project" id="project">
      <h3 className="title">Проекты</h3>
      <ul className="project__items">
        {projects.map((i) => (
          <li className="project__item" key={i.path}>
            <img className="project__img" src={i.img} alt={i.title} />
            <section className="project__content">
              <p className="project__stack">{i.stack}</p>
              <h5 className="project__title">{i.title}</h5>
              <p className="project__description">{i.description}</p>
              <a href={i.path} className="project__btn-path">
                <button className="btn">Cайт</button>
              </a>
              <a href={i.repo} className="project__btn-repo">
                <button className="btn">Репозиторий</button>
              </a>
            </section>
          </li>
        ))}
      </ul>
    </article>
  );
};
