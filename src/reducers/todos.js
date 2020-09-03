import { DATA_RECEIVED } from '../actions/shared'
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions/todos'

const todos = (state = [], action) => {
  switch (action.type) {
    case DATA_RECEIVED:
      return action.todos
    case ADD_TODO:
      return state.concat([action.todo])
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id)
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id !== action.id ? todo : { ...todo, complete: !todo.complete }
      )
    default:
      return state
  }
}

export default todos
