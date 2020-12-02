import React from "react"

import InputField from "components/InputField/InputField"
import Button from "components/Button/Button"

import "./TodoForm.scss"

const TodoForm = ({onChange, onSubmit, descriptionValue, titleValue}) => {
  return (
    <form className="todo-form" onSubmit={onSubmit}>
      <InputField
        className="todo-form__input"
        name="title"
        type="text"
        placeholder="add a new title..."
        onChange={onChange}
        value={titleValue}
      />
      <InputField
        className="todo-form__input"
        name="description"
        type="text"
        placeholder="add a new description..."
        onChange={onChange}
        value={descriptionValue}
      />
      <Button className="todo-form__btn">Add</Button>
    </form>
  )
}

export default TodoForm
