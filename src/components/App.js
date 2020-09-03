import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { requestData } from '../actions/shared'

import Todos from './Todos'
import Goals from './Goals'

const App = ({ dispatch, loading }) => {
  useEffect(() => {
    dispatch(requestData())
  }, [dispatch])

  if (loading === true) {
    return <h3>Loading</h3>
  }

  return (
    <div>
      <Todos />
      <Goals />
    </div>
  )
}

export default connect((state) => ({ loading: state.loading }))(App)
