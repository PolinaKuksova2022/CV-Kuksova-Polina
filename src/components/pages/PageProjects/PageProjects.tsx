import React from "react";
import "../../styles/main.scss";
import { projects } from "../../data/projects";

export const PageProjects = () => {
  return (
    <main className="catalog">
      <div className="catalog__inner">
        {projects.map((i) => (
          <article className="project" key={i.path}>
            <h3 className="project__title">{i.title}</h3>
            <p className="project__description">{i.description}</p>
            <p className="project__stack">Стек: {i.stack}</p>
            <a href={i.path} className="project__btn-path">
              <button className="btn">Cайт</button>
            </a>
            <a href={i.repo} className="project__btn-repo">
              <button className="btn">Репозиторий</button>
            </a>
            <img src={i.img} alt={i.title} />
          </article>
        ))}
      </div>
    </main>
  );
};
