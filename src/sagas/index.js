import { spawn, call, all } from 'redux-saga/effects'
import { watchDataRequested } from '../actions/shared'
import { watchSaveGoal, watchDeleteGoal } from '../actions/goals'
import { watchTodo } from '../actions/todos'
// import alertOnBitcoin from './alertOnBitcoin'

export default function* rootSaga() {
  const sagas = [
    watchDataRequested,
    // alertOnBitcoin,
    watchSaveGoal,
    watchDeleteGoal,
    watchTodo,
  ]

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.error(e)
          }
        }
      })
    )
  )
}
