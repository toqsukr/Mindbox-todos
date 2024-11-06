import { Todo } from '../../../../type'

export type TodoProp = Todo & {
  toggleTodo: (id: string, checked: boolean) => void
}
