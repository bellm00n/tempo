import { changeModal } from "features/modals/modalsSlice";
import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFirestore } from "react-redux-firebase";
import { Input, Button } from "ui/uikit";

const NewProject = () => {
  const dispatch = useDispatch();
  const [inputText, changeInputText] = useState("");
  const onInputChange = (event) => changeInputText(event.target.value);

  const firestore = useFirestore();
  const { uid } = useSelector((state) => state.firebase.auth);

  const addNewProject = () => {
    firestore
      .collection("users")
      .doc(uid)
      .collection("projects")
      .add({
        name: inputText,
        time: 0,
        isTimerOn: false,
      })
      .then((docRef) => {
        docRef.update({
          todoID: docRef.id,
        });
      });
    changeInputText("");
    dispatch(changeModal(null));
  };

  return (
    <Fragment>
      <h1 className="modal__title">New project</h1>
      <Input
        className="modal__input"
        value={inputText}
        onChange={onInputChange}
        label="Project name"
        type="text"
      />
      <div className="modal__buttons">
        <Button className="modal__button" handler={addNewProject}>
          Save
        </Button>
        <Button
          className="modal__button button--outline"
          handler={() => dispatch(changeModal(null))}
        >
          Cancel
        </Button>
      </div>
    </Fragment>
  );
};

export default NewProject;
