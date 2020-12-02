import {actionTypes} from "./actionTypes"

const initialState = [
  {id: 1, title: "Chess", description: "It trains the mind.", completed: false},
  {
    id: 2,
    title: "Tennis",
    description: "Gives pleasant feelings.",
    completed: false,
  },
  {
    id: 3,
    title: "Football",
    description: "Unites all the people of the world.",
    completed: false,
    color: "red",
  },
]

export const nextTodoId = (todo) => {
  const maxId = todo.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
  return maxId + 1
}
export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      const {title, description} = action.payload
      const newItem = {
        id: nextTodoId(state),
        title: title,
        description: description,
        completed: false,
      }
      return [...state, newItem]
    case actionTypes.TODO_TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo
        }
        return {
          ...todo,
          completed: !todo.completed,
        }
      })
    case actionTypes.SELECTED_COLOR:
      const {color, todoId} = action.payload
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo
        }

        return {
          ...todo,
          color,
        }
      })
    case actionTypes.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload)
    case actionTypes.ALL_COMPLETED:
      return state.map((todo) => {
        return {...todo, completed: true}
      })
    case actionTypes.COMPLETED_CLEARED:
      return state.filter((todo) => !todo.completed)
    case actionTypes.SELECTED_ALL_COMPLETED:
      return state.map((todo) => {
        return {...todo, completed: true}
      })
    case actionTypes.UPDATE_TODO:
      const {id, newTitle, newDescription} = action.payload
      return state.map((item) =>
        item.id === id
          ? {...state, title: newTitle, description: newDescription}
          : item
      )
    default:
      return state
  }
};