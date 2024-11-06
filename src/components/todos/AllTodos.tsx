import { FC } from 'react'
import TodoList from '../ui/todo-list/TodoList'
import { TodosProp } from './Todos.type'

const AllTodos: FC<TodosProp> = todoData => {
  return <TodoList {...todoData} />
}

export default AllTodos
