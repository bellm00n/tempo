import React from 'react';
import Main from 'ui/templates/Main';
import { ProjectCard, EmptyCard } from 'ui/uikit';
import { useDispatch } from 'react-redux';
import { changeModal } from 'features/modals/modalsSlice'
import 'ui/pages/Projects/projects.css';

const Project = () => {
  const dispatch = useDispatch();
  const showCreateProjectModal = () => {
    dispatch(changeModal('NewProject'));
  }

  return (
      <Main className="projects">
        <h1 className="projects__title">My projects</h1>
        <div className="projects__container">
          <div className="projects__row">
            <EmptyCard className="projects__card" onClickHandler={showCreateProjectModal}/>
            <ProjectCard className="projects__card" projectName="Tempo" time="20:10:13"/>
            <ProjectCard className="projects__card" projectName="Tempo" time="20:10:13"/>
            <ProjectCard className="projects__card" projectName="Tempo" time="20:10:13"/>
            <ProjectCard className="projects__card" projectName="Tempo" time="20:10:13"/>
            <ProjectCard className="projects__card" projectName="Tempo" time="20:10:13"/>
            <ProjectCard className="projects__card" projectName="Tempo" time="20:10:13"/>
            <ProjectCard className="projects__card" projectName="Tempo" time="20:10:13"/>
            <ProjectCard className="projects__card" projectName="Tempo" time="20:10:13"/>
            <ProjectCard className="projects__card" projectName="Tempo" time="20:10:13"/>
            <ProjectCard className="projects__card" projectName="Tempo" time="20:10:13"/>
            <ProjectCard className="projects__card" projectName="Chapel" time="20:10:13"/>
          </div>
        </div>
      </Main>
  );
};

export default Project;
