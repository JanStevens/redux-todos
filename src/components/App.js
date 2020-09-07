import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { requestData } from '../actions/shared'

import Todos from './Todos'
import Goals from './Goals'

const App = () => {
  const loading = useSelector((state) => state.loading)
  const dispatch = useDispatch()
  
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

export default App
