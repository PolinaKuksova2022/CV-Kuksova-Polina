import React from "react";
import "../styles/main.scss";
import profile from "../../assets/personalphoto.jpg";
import location from "../../assets/location.png";
import { contact } from "../data/contact";
import { soft } from "../data/soft.";

export const About = () => {
  return (
    <div className="aboutMe">
      <div className="profile">
        <img src={profile} alt="" />
        <div className="profile__description">
          <div className="profile__description-surname">Куксова</div>
          <div className="profile__description-name">Полина</div>
          <div className="profile__description-speciality">
            Junior Frontend-разработчик
          </div>
        </div>
      </div>
      <div className="contact">
        {contact.map((i) => (
          <a className="link" href={i.path} key={i.path}>
            <div className="contact__item">
              <img src={i.img} alt="" />
              <div>{i.contact}</div>
            </div>
          </a>
        ))}
        <div className="contact__item">
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
        </div>
      </div>
      <div className="edition">
        Языки
        <ul>
          <li>Русский: носитель</li>
          <li>English: B1-B2</li>
        </ul>
      </div>
      <div className="edition">
        Soft-skills
        <ul>
          {soft.map((i) => (
            <li key={i.id}>{i.description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
