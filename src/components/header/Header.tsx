import React from "react";
import "../styles/main.scss";
import { Link, useLocation } from "react-router-dom";
import { path } from "../router";

export const Header = () => {
  const location = useLocation();
  return (
    <header className="header">
      <nav className="header__path">
        {path.map(
          (el) =>
            !el.hidden && (
              <Link
                className={`link link-nav ${
                  location.pathname.startsWith(el.path) ? "link-active" : ""
                }`}
                to={el.path}
                key={el.path}
              >
                {el.name}
              </Link>
            )
        )}
      </nav>
    </header>
  );
};
