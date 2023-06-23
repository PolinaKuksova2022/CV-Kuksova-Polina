import React from "react";
import "../styles/main.scss";
import { skills } from "../data/skills";

export const Skills = () => {
  return (
    <article className="skills" id="skills">
      <h3 className="title">Технические навыки</h3>
      <ul className="skills__items">
        {skills.map((i) => (
          <li className="skills__item" key={i.name}>
            <img src={i.img} alt={i.name} />
            <h4>{i.name}</h4>
          </li>
        ))}
      </ul>
    </article>
  );
};
