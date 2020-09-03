import { ADD_GOAL, REMOVE_GOAL } from '../actions/goals'
import { DATA_RECEIVED } from '../actions/shared'

const goals = (state = [], action) => {
  switch (action.type) {
    case DATA_RECEIVED:
      return action.goals
    case ADD_GOAL:
      console.log(action)
      return state.concat([action.goal])
    case REMOVE_GOAL:
      return state.filter((goal) => goal.id !== action.id)
    default:
      return state
  }
}

export default goals
