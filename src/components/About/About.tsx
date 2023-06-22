import React from "react";
import "../styles/main.scss";
import profile from "../../assets/personalphoto.jpg";
import location from "../../assets/location.png";
import { contact } from "../data/contact";
import { soft } from "../data/soft.";

export const About = () => {
  return (
    <article className="about" id="about">
      <section className="profile">
        <div className="profile__img">
          <img src={profile} alt="photo" />
        </div>
        <section className="profile__description">
          <h2 className="profile__description-name">
            Привет, я <span>Полина</span> :)
          </h2>
          <h1 className="profile__description-speciality">
            Front-end разработчик
          </h1>
        </section>
        <section className="profile__contact">
          {contact.map((i) => (
            <a className="link" href={i.path} key={i.path}>
              <img src={i.img} alt={i.contact} />
            </a>
          ))}
        </section>
      </section>
      {/* <nav className="edition">
        Языки
        <ul>
          <li>Русский: носитель</li>
          <li>English: B1-B2</li>
        </ul>
      </nav> */}
      <nav className="edition">
        <ul>
          {soft.map((i) => (
            <li key={i.id}>
              {i.description}
            </li>
          ))}
        </ul>
      </nav>
    </article>
  );
};
