import React from "react";
import "../styles/main.scss";
import profile from "../../assets/personalphoto.jpg";
import location from "../../assets/location.png";
import { contact } from "../data/contact";
import { soft } from "../data/soft.";

export const About = () => {
  return (
    <article className="aboutMe">
      <section className="profile">
        <img src={profile} alt="" />
        <section className="profile__description">
          <h2 className="profile__description-surname">Куксова</h2>
          <h1 className="profile__description-name">Полина</h1>
          <h3 className="profile__description-speciality">
            Junior Frontend-разработчик
          </h3>
        </section>
      </section>
      <section className="contact">
        {contact.map((i) => (
          <a className="link" href={i.path} key={i.path}>
            <section className="contact__item">
              <img src={i.img} alt="" />
              <p>{i.contact}</p>
            </section>
          </a>
        ))}
        <section className="contact__item">
          <img src={location} alt="location" />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "baseline",
            }}
          >
            Санкт-Петербург
            <p style={{ fontSize: "15rem", marginLeft: "10rem" }}>
              (не готова к переезду)
            </p>
          </div>
        </section>
      </section>
      <nav className="edition">
        Языки
        <ul>
          <li>Русский: носитель</li>
          <li>English: B1-B2</li>
        </ul>
      </nav>
      <nav className="edition">
        Soft skills
        <ul>
          {soft.map((i) => (
            <li key={i.id}>{i.description}</li>
          ))}
        </ul>
      </nav>
    </article>
  );
};