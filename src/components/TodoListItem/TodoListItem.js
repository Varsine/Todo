import React from "react";

import InputField from "components/InputField/InputField";
import Image from 'components/Image/Image';
import editIcon from 'image/editIcon.png';
import deleteIcon from 'image/deleteIcon.png';

import "./TodoListItem.scss";

const TodoListItem = ({
    title,
    description,
    handleColorChanged,
    colors,
    optionRef,
    clickDelete,
    changeCompleted,
    checked,
    clickUpdate
}) => {
    return (
        <div className="list-group-item">
            <InputField
                name='completed'
                className={`list-group-item__completed-checkbox ${checked ? 'list-group-item__completed-checkbox--selected' : ''}`}
                type="checkbox"
                onChange={changeCompleted}
                checked={checked}
            />
            <div className="list-group-item__data">
                <div className="list-group-item__data__title">{title}</div>
                <div className="list-group-item__data__description">{description}</div>
            </div>
            <select onChange={handleColorChanged} className="list-group-item__select-color">
                {colors.map((color, idx) => {
                    return <option className="list-group-item__select-color" style={{ color: color }} ref={optionRef} value={color} key={`color ${idx}`}>{color}</option>
                })}
            </select>
            <div className="list-group-item__update" onClick={clickUpdate}>
                <Image src={editIcon} />
            </div>
            <div className="list-group-item__close" onClick={clickDelete}>
                <Image src={deleteIcon} />
            </div>
        </div>
    )
}

export default TodoListItem;