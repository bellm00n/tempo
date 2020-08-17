import PropTypes from 'prop-types';
import React from 'react';
import 'ui/uikit/ProjectCard/projectCard.css';

const ProjectCard = ({type, className, projectName, isTimerOn, time}) => {
  return (
      <div
          className={`project-card project-card--type-${type} ${className}`}
      >
        <h2 className="project-card__title">{projectName}</h2>
        {isTimerOn ? <div className="project-card__counter">
          <span className="project-card__time">{time}</span>
        </div> : null}
      </div>
  );
};

ProjectCard.propTypes = {
  className: PropTypes.string,
  isTimerOn: PropTypes.bool,
  projectName: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  type: PropTypes.number
}

ProjectCard.defaultProps = {
  className: '',
  isTimerOn: false,
  type: 1
}

export default ProjectCard;
