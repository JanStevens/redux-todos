import { DATA_RECEIVED } from '../actions/shared'

const loading = (state = true, action) => {
  switch (action.type) {
    case DATA_RECEIVED:
      return false
    default:
      return state
  }
}

export default loading
