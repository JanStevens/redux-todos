import {
  saveGoal as APISaveGoal,
  deleteGoal as APIDeleteGoal,
} from '../utils/api'

import { takeEvery, put, call } from 'redux-saga/effects'

export const ADD_GOAL = 'ADD_GOAL'
export const SAVE_GOAL = 'SAVE_GOAL'

export const REMOVE_GOAL = 'REMOVE_GOAL'
export const DELETE_GOAL = 'DELETE_GOAL'

const addGoal = (goal) => ({ type: ADD_GOAL, goal })
const removeGoal = (id) => ({ type: REMOVE_GOAL, id })

export const saveGoal = (goal, callback) => ({
  type: SAVE_GOAL,
  goal,
  callback,
})
export const deleteGoal = (goal) => ({
  type: DELETE_GOAL,
  goal,
})

function* handleDeleteGoal(action) {
  yield put(removeGoal(action.goal.id))
  const { error } = yield call(APIDeleteGoal, action.goal.id)
  if (error) {
    yield put(addGoal(action.goal))
    alert(`${error}: Something went wrong, try again`)
  }
}

function* handleSaveGoal(action) {
  const { goal, error } = yield call(APISaveGoal, action.goal)
  if (goal) {
    yield put(addGoal(goal))
    action.callback()
  } else {
    alert(`${error}: Something went wrong, try again`)
  }
}

export function* watchDeleteGoal() {
  yield takeEvery(DELETE_GOAL, handleDeleteGoal)
}

export function* watchSaveGoal() {
  yield takeEvery(SAVE_GOAL, handleSaveGoal)
}
