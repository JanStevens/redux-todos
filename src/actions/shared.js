import API from 'goals-todos-api'
import { takeEvery, put, all } from 'redux-saga/effects'

export const DATA_REQUESTED = 'DATA_REQUESTED'
export const DATA_RECEIVED = 'DATA_RECEIVED'

export const requestData = () => ({
  type: DATA_REQUESTED,
})

const receiveData = (todos, goals) => ({
  type: DATA_RECEIVED,
  todos,
  goals,
})

// Fetches the todos and goals in parallel
// Then puts a new message receive data
function* handleFetchData() {
  const [todos, goals] = yield all([API.fetchTodos(), API.fetchGoals()])
  yield put(receiveData(todos, goals))
}

// Watches the actions and waits for a DATA_REQUESTED
// It will then call handleFetchData
export function* watchDataRequested() {
  yield takeEvery(DATA_REQUESTED, handleFetchData)
}
