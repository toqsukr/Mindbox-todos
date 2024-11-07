import { TodoStatus } from '../../type'
import { TodoListProp } from '../ui/todo-list/TodoList.type'

export type TodosProp = {
  status: TodoStatus
} & TodoListProp
