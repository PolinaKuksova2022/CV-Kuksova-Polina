import React from "react";
import "../../components/Styles/main.scss";
import { About } from "../../components/About/About";
import { Skills } from "../../components/Skills/Skills";
import { Projects } from "../../components/Projects/Projects";

export const PageMain = () => {
  return (
    <main className="about">
        <About />
        <Skills />
        <Projects />
    </main>
  );
};
