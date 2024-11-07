import { FC } from 'react'
import Todo from './todo/Todo'
import css from './TodoList.module.scss'
import { TodoListProp } from './TodoList.type'

const TodoList: FC<TodoListProp> = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className={css.todo_list}>
      {todos.map(props => (
        <Todo key={props.id} {...props} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  )
}

export default TodoList
