import { Todo, TodoStatus } from '../../type'

export type TodosProp = {
  todos: Todo[]
  status: TodoStatus
  toggleTodo: (id: string, checked: boolean) => void
}
