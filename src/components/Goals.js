import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { saveGoal, deleteGoal } from '../actions/goals'
import List from './List'

const Goals = () => {
  const [value, setValue] = React.useState('')
  const goals = useSelector((state) => state.goals)
  const dispatch = useDispatch()

  const addItem = (e) => {
    e.preventDefault()
    dispatch(saveGoal(value, () => setValue('')))
  }

  const removeItem = (goal) => {
    dispatch(deleteGoal(goal))
  }

  return (
    <div>
      <h1>Goals</h1>
      <input
        type="text"
        placeholder="Add Goal"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={addItem}>Add Goal</button>

      <List items={goals} remove={removeItem} />
    </div>
  )
}

export default Goals
