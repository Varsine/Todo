import React from "react";

import Button from "../Button/Button";
import InputField from "../InputField/InputField";

import "./Popup.scss";

const Popup = ({
  onClose,
  valueTitle,
  onChange,
  valueDescription,
  clickUpdate,
}) => {
  return (
    <div className="app-popup">
      <div className="app-popup__basis" onClick={onClose}></div>
      <div className="app-popup__inner">
        <div className="app-popup__inner__close-icon" onClick={onClose}>
          x
        </div>
        <div className="app-popup__inner__content">
          <p className="app-popup__inner__content__title">Update</p>
          <div className="app-popup__inner__content__children">
            <InputField
              className="app-popup__inner__content__children__input"
              name="updateTitle"
              type="text"
              value={valueTitle}
              onChange={onChange}
              placeholder="Update title value.."
            />
            <InputField
              className="app-popup__inner__content__children__input"
              name="updateDescription"
              type="text"
              value={valueDescription}
              onChange={onChange}
              placeholder="Update description value.."
            />
            <Button
              className="app-popup__inner__content__children__btn"
              onClick={clickUpdate}
            >
              Ok
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popup;