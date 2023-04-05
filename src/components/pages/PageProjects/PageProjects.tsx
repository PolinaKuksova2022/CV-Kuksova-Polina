import React from "react";
import "../../styles/main.scss";
import { projects } from "../../data/projects";

export const PageProjects = () => {
  return (
    <div className="catalog">
      <div className="catalog__inner">
        {projects.map((i) => (
          <div className="project" key={i.path}>
            <div className="project__title">{i.title}</div>
            <div className="project__description">{i.description}</div>
            <div className="project__stack">Стек: {i.stack}</div>
            <a href={i.path} className="project__btn-path">
              <button className="btn">Cайт</button>
            </a>
            <a href={i.repo} className="project__btn-repo">
              <button className="btn">Репозиторий</button>
            </a>
            <img src={i.img} alt={i.title} />
          </div>
        ))}
      </div>
    </div>
  );
};
