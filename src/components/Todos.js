import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { saveTodo, deleteTodo, updateTodoCompleted } from '../actions/todos'

import List from './List'

const Todos = () => {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()
  const [value, setValue] = React.useState('')
  const addTodo = (e) => {
    e.preventDefault()
    dispatch(saveTodo(value, () => setValue('')))
  }

  const removeItem = (todo) => {
    dispatch(deleteTodo(todo))
  }

  const toggleItem = (todo) => {
    dispatch(updateTodoCompleted(todo.id))
  }

  return (
    <div>
      <h1>Todo List </h1>
      <input
        type="text"
        placeholder="Add Todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <List items={todos} remove={removeItem} toggle={toggleItem} />
    </div>
  )
}

export default Todos
