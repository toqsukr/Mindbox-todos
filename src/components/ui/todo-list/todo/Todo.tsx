import { Checkbox } from '@mui/material'
import cn from 'clsx'
import { FC } from 'react'
import { RxCross2 } from 'react-icons/rx'
import css from './Todo.module.scss'
import { TodoProp } from './Todo.type'

const Todo: FC<TodoProp> = ({ id, text, status, toggleTodo, deleteTodo }) => {
  return (
    <li data-testid='todo' className={cn(css.todo, { [css.done]: status === 'Done' })}>
      {text}
      <div className={css.control}>
        <Checkbox
          checked={status === 'Done'}
          sx={{ '& .MuiSvgIcon-root': { color: 'white' } }}
          onChange={(_, checked) => toggleTodo(id, checked)}
        />
        <RxCross2 onClick={() => deleteTodo(id)} data-testid='delete-todo-btn' />
      </div>
    </li>
  )
}

export default Todo
