import React from "react";
import "../../styles/main.scss";
import { About } from "../../About/About";
import { Skills } from "../../Skills/Skills";

export const PageMain = () => {
  return (
    <main className="about">
      <div className="about__inner">
        <About />
        <Skills />
      </div>
    </main>
  );
};
