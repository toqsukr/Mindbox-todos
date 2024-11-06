import { FC } from 'react'
import TodoList from '../ui/todo-list/TodoList'
import { TodosProp } from './Todos.type'

const ActiveTodos: FC<TodosProp> = ({ todos, ...props }) => {
  return <TodoList todos={todos.filter(({ status }) => status === 'Active')} {...props} />
}

export default ActiveTodos
