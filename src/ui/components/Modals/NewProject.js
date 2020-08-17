import { changeModal } from 'features/modals/modalsSlice';
import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux';
import { Input, Button } from 'ui/uikit';

const NewProject = () => {
  const dispatch = useDispatch();

  return (
      <Fragment>
        <h1 className="modal__title">New project</h1>
        <Input className="modal__input" label="Project name" type="text"/>
        <div className="modal__buttons">
          <Button className="modal__button">Save</Button>
          <Button className="modal__button button--outline" handler={() => dispatch(changeModal(null))}>Cancel</Button>
        </div>
      </Fragment>
  )
}

export default NewProject;