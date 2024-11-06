import { FC, ReactNode } from 'react'
import { TodoStatus } from '../../type'
import ActiveTodos from './ActiveTodos'
import AllTodos from './AllTodos'
import DoneTodos from './DoneTodos'
import { TodosProp } from './Todos.type'

const Todos: FC<TodosProp> = props => {
  const getTodos: Record<TodoStatus, ReactNode> = {
    Active: <ActiveTodos {...props} />,
    All: <AllTodos {...props} />,
    Done: <DoneTodos {...props} />,
  }
  return getTodos[props.status]
}

export default Todos
