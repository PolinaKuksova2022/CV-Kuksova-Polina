import React, { useState } from "react";
import "../styles/main.scss";
import { nav } from "../data/navigation";

export const Header = () => {
  const [menu, setMenu] = useState(false);

  const switchMenu = () => {
    setMenu(!menu);
  };
  return (
    <header className="header">
      <nav className={menu ? "header__path_small" : "header__path"}>
        <ul className="header__items">
          {nav.map((i) => (
            <li className="header__item" key={i.id}>
              <a
                className="link link-nav"
                href={i.path}
                onClick={() => switchMenu()}
              >
                {i.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button className="header__menu" onClick={() => switchMenu()}>
        <span
          className={menu ? "header__menu_cross" : "header__menu_lines"}
        ></span>
      </button>
    </header>
  );
};
