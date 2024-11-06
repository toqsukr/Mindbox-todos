import { Checkbox } from '@mui/material'
import cn from 'clsx'
import { FC } from 'react'
import css from './Todo.module.scss'
import { TodoProp } from './Todo.type'

const Todo: FC<TodoProp> = ({ id, text, status, toggleTodo }) => {
  return (
    <li className={cn(css.todo, { [css.done]: status === 'Done' })}>
      {text}
      <Checkbox
        sx={{
          '& .MuiSvgIcon-root': {
            color: 'white',
          },
        }}
        checked={status === 'Done'}
        onChange={(_, checked) => toggleTodo(id, checked)}
      />
    </li>
  )
}

export default Todo
