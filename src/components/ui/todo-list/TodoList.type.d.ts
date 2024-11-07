import { Todo } from '../../../type'
import { TodoProp } from './todo/Todo.type'

export type TodoListProp = {
  todos: Todo[]
} & Pick<TodoProp, 'toggleTodo' | 'deleteTodo'>
