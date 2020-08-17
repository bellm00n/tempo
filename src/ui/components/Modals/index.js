import { changeModal } from "features/modals/modalsSlice";
import React, { useEffect } from "react";
import "ui/components/Modals/modals.css";
import { useDispatch, useSelector } from "react-redux";
import NewProject from "ui/components/Modals/NewProject";

const Modals = () => {
  const currentPopupName = useSelector((state) => state.modals.currentModal);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflowY = currentPopupName ? "hidden" : "visible";
  });

  if (!currentPopupName) return null;

  const popupList = { NewProject };
  const CurrentPopup = popupList[currentPopupName];

  return (
    <div className="modal" onClick={() => dispatch(changeModal(null))}>
      <div className="modal__box" onClick={(event) => event.stopPropagation()}>
        <CurrentPopup />
      </div>
    </div>
  );
};

export default Modals;
