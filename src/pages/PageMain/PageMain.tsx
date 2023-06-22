import React from "react";
import "../../components/Styles/main.scss";
import { About } from "../../components/About/About";
import { Skills } from "../../components/Skills/Skills";
import { Projects } from "../../components/Projects/Projects";
import { Education } from "../../components/Education/Education";
import { Experience } from "../../components/Experience/Experience";
import { ScrollToTop } from "../../components/BtnUp/BtnUp";

export const PageMain = () => {
  return (
    <main className="pageMain">
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <ScrollToTop />
    </main>
  );
};
