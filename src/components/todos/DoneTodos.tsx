import { FC } from 'react'
import TodoList from '../ui/todo-list/TodoList'
import { TodosProp } from './Todos.type'

const DoneTodos: FC<TodosProp> = ({ todos, ...props }) => {
  return <TodoList todos={todos.filter(({ status }) => status === 'Done')} {...props} />
}

export default DoneTodos
