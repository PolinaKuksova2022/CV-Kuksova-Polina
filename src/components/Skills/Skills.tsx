import React from "react";
import "../styles/main.scss";
import { skills } from "../data/skills";

export const Skills = () => {
  return (
    <article id="skills">
      <h3 className="paragraph">Технические навыки</h3>
      <section className="skills">
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
