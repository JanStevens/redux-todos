import API from 'goals-todos-api'

// This way we can easily detect that something went wrong
const return500 = () => ({ error: 500 })

export const saveGoal = (goal) =>
  API.saveGoal(goal)
    .then((goal) => ({ goal }))
    .catch(return500)

export const deleteGoal = (id) => API.deleteGoal(id).catch(return500)

export const saveTodo = (todo) =>
  API.saveTodo(todo)
    .then((todo) => ({ todo }))
    .catch(return500)

export const deleteTodo = (id) => API.deleteTodo(id).catch(return500)

export const saveTodoToggle = (id) => API.saveTodoToggle(id).catch(return500)
