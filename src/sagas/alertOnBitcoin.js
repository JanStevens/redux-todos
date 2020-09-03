import { ADD_TODO } from '../actions/todos'
import { ADD_GOAL } from '../actions/goals'

import { takeEvery } from 'redux-saga/effects'

export default function* alertOnBitcoin() {
  yield takeEvery([ADD_TODO], ({ todo }) => {
    if (todo.toLowerCase().indexOf('bitcoin') !== -1) {
      return alert('Should not add bitcoin!')
    }
  })

  yield takeEvery([ADD_GOAL], ({ goal }) => {
    if (goal.toLowerCase().indexOf('bitcoin') !== -1) {
      return alert('Should not add bitcoin!')
    }
  })
}
