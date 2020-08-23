import React from 'react';
import { useFirestoreConnect } from 'react-redux-firebase';
import Main from 'ui/templates/Main';
import { ProjectCard, EmptyCard } from 'ui/uikit';
import { useDispatch, useSelector } from 'react-redux';
import { changeModal } from 'features/modals/modalsSlice';
import 'ui/pages/Projects/projects.css';

const Project = () => {
  const dispatch = useDispatch();

  const {uid} = useSelector((state) => state.firebase.auth);
  useFirestoreConnect({
    collection: `users/${uid}/projects`,
    storeAs: 'projects',
  });

  const projectsList = useSelector((state) => state.firestore.data.projects);

  const renderProjectsCard = () => {
    return Object.keys(projectsList).map((key) => (
        <div className="projects__card">
          <ProjectCard
              key={projectsList[key].name}
              projectName={projectsList[key].name}
              time={projectsList[key].time}
              isTimerOn={projectsList[key].isTimerOn}
              type="1"
          />
        </div>
    ));
  };

  const showCreateProjectModal = () => {
    dispatch(changeModal('NewProject'));
  };

  return (
      <Main>
        <div className="projects">
          <h1 className="projects__title">My projects</h1>
          <div className="projects__container">
            <div className="projects__card">
              <EmptyCard
                  onClickHandler={showCreateProjectModal}
              />
            </div>
            {projectsList ? renderProjectsCard() : null}
          </div>
        </div>

      </Main>
  );
};

export default Project;
