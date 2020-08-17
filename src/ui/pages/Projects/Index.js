import React from "react";
import Main from "ui/templates/Main";
import { ProjectCard, EmptyCard } from "ui/uikit";
import "ui/pages/Projects/projects.css";

const Project = () => {
  return (
    <Main className="projects">
      <h1 className="projects__title">My projects</h1>
      <div className="projects__container">
        <ProjectCard className="projects__card" projectName="Tempo" time="20:10:13" />
        <ProjectCard className="projects__card" projectName="Chapel" time="20:10:13" />
        <EmptyCard />
      </div>
    </Main>
  );
};

export default Project;
