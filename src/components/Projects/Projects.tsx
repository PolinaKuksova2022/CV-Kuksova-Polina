import React from "react";
import "../Styles/main.scss";
import { projects } from "../data/projects";

export const Projects = () => {
  return (
    <article className="catalog">
      <ul className="projects">
        {projects.map((i) => (
          <li className="project" key={i.path}>
            <img className="project__img" src={i.img} alt={i.title} />
            <section>
              <p className="project__stack">{i.stack}</p>
              <h3 className="project__title">{i.title}</h3>
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
