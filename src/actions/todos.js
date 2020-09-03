import {
  saveTodo as APISaveTodo,
  deleteTodo as APIDeleteTodo,
  saveTodoToggle as APISaveTodoToggle,
} from '../utils/api'
import { takeEvery, call, put } from 'redux-saga/effects'

export const ADD_TODO = 'ADD_TODO'
export const SAVE_TODO = 'SAVE_TODO'

export const REMOVE_TODO = 'REMOVE_TODO'
export const DELETE_TODO = 'DELETE_TODO'

export const TOGGLE_TODO = 'TOGGLE_TODO'
export const UPDATE_TODO_COMPLETED = 'UPDATE_TODO_COMPLETED'

const addTodo = (todo) => ({ type: ADD_TODO, todo })
export const saveTodo = (todo, callback) => ({
  type: SAVE_TODO,
  todo,
  callback,
})

const removeTodo = (id) => ({ type: REMOVE_TODO, id })
export const deleteTodo = (todo) => ({
  type: DELETE_TODO,
  todo,
})

const toggleTodo = (id) => ({ type: TOGGLE_TODO, id })
export const updateTodoCompleted = (id) => ({
  type: UPDATE_TODO_COMPLETED,
  id,
})

function* handleSaveTodo(action) {
  const { todo, error } = yield call(APISaveTodo, action.todo)
  if (todo) {
    yield put(addTodo(todo))
    action.callback()
  } else {
    alert(`${error}: Something went wrong, try again`)
  }
}

function* handleDeleteTodo(action) {
  yield put(removeTodo(action.todo.id))
  const { error } = yield call(APIDeleteTodo, action.todo.id)
  if (error) {
    yield put(addTodo(action.todo))
    alert(`${error}: Something went wrong, try again`)
  }
}

function* handleToggleTodo(action) {
  yield put(toggleTodo(action.id))
  const { error } = yield call(APISaveTodoToggle, action.id)
  if (error) {
    yield put(toggleTodo(action.id))
    alert(`${error}: Something went wrong, try again`)
  }
}

export function* watchTodo() {
  yield takeEvery(SAVE_TODO, handleSaveTodo)
  yield takeEvery(DELETE_TODO, handleDeleteTodo)
  yield takeEvery(UPDATE_TODO_COMPLETED, handleToggleTodo)
}
