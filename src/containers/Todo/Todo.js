import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { useDispatch } from 'react-redux'

import { actionTypes } from "./../../reducer/actionTypes";
import HeaderTodo from "../../components/HeaderTodo/HeaderTodo";
import TodoListItem from "../../components/TodoListItem/TodoListItem";
import TodoForm from "../../components/TodoForm/TodoForm";
import Button from '../../components/Button/Button';
import Popup from "../../components/Popup/Popup";

import "./Todo.scss";

const colors = ["Select your color...", "red", "blue", "green", 'black', 'pink', 'yellow']

const Todo = ({ todos }) => {
    localStorage.setItem('list', JSON.stringify(todos))
    const todo = JSON.parse(localStorage.getItem('list'))
    const [state, setState] = useState({
        title: '',
        description: '',
    })
    const [updateState, setUpdateState] = useState({
        updateDescription: '',
        updateTitle: ''
    })

    const dispatch = useDispatch()
    const [invalidState, setInvalidState] = useState(false)
    const optionRef = useRef(null)
    const [updatePopUp, setUpdatePopUp] = useState(false)
    const [selectedTodoItem, setSelectedTodoItem] = useState(null);

    const handleCompletedChanged = (id) => {
        dispatch({ type: actionTypes.TODO_TOGGLED, payload: todo[id].id })
    }
    const selectedCompletedClicked = () => dispatch({ type: actionTypes.SELECTED_ALL_COMPLETED })

    const handleColorChanged = (e) => {
        const color = e.target.value
        dispatch({
            type: actionTypes.SELECTED_COLOR,
            payload: { todoId: todo.id, color },
        })
    }

    const DeleteTodoItem = (id) => {
        dispatch({ type: actionTypes.DELETE_TODO, payload: todo[id].id })
    }
    const inputChangeHandler = (e) => {
        setUpdateState({
            ...state,
            [e.target.name]: e.target.value,
        })
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }
    const handlerSubmit = (event) => {
        event.preventDefault();
        const { title, description } = state
        if (title !== "" && description !== "") {
            dispatch({ type: actionTypes.ADD_TODO, payload: { title, description } })
            setInvalidState(false)
            setState({
                description: '',
                title: ''
            })
        } else {
            setInvalidState(true)
        }
    }
    const clearCompletedClicked = () => dispatch({ type: actionTypes.COMPLETED_CLEARED })
    const changePopupStatus = (item) => {
        setSelectedTodoItem(item)
        setUpdatePopUp(!updatePopUp)
    }
    const clickUpdate = (e) => {
        e.preventDefault()
        const id = selectedTodoItem.id;
        const newTitle = updateState.updateTitle;
        const newDescription = updateState.updateDescription;

        dispatch({ type: actionTypes.UPDATE_TODO, payload: { id, newTitle, newDescription } })
        setUpdatePopUp(!updatePopUp)
        setUpdateState({
            updateDescription: '',
            updateTitle: ''
        })
    }
    return (
        <div className="todo-content">
            <div className="todo-content__child">
                <HeaderTodo />
                <TodoForm colors={colors}
                    onSubmit={handlerSubmit}
                    onChange={inputChangeHandler}
                    titleValue={state.title}
                    descriptionValue={state.description}
                />
                <div className={invalidState === false ? 'todo-content__child__successful' : 'todo-content__child__error-massage'}>Fill in all the fields*</div>
                <div className="todo-content__child__todo-list">
                    {todo.map((item, idx) => {
                        return (
                            <TodoListItem
                                colors={colors}
                                changeCompleted={() => handleCompletedChanged(idx)}
                                checked={item.completed}
                                optionRef={optionRef}
                                handleColorChanged={handleColorChanged}
                                key={`${item.title}${item.id}`}
                                title={item.title}
                                description={item.description}
                                clickUpdate={() => changePopupStatus(item)}
                                clickDelete={() => DeleteTodoItem(idx)}
                            />
                        )
                    })}
                </div>
                <div className="todo-content__child__completed-button">
                    <Button onClick={selectedCompletedClicked} >All Completed</Button>
                    <Button onClick={clearCompletedClicked} >Clear Completed</Button>
                </div>
            </div>
            {
                updatePopUp && selectedTodoItem && <Popup
                    onClose={changePopupStatus}
                    valueTitle={updateState.updateTitle || ""}
                    onChange={inputChangeHandler}
                    valueDescription={updateState.updateDescription || ""}
                    clickUpdate={clickUpdate}
                />
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state
    }
}

export default connect(mapStateToProps)(Todo);