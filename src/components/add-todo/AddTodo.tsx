import { FC, useRef } from 'react'
import Button from '../ui/button/Button'
import Input from '../ui/input/Input'
import css from './AddTodo.module.scss'
import { AddTodoProp } from './AddTodo.type'

const AddTodo: FC<AddTodoProp> = ({ addTodo, disabled }) => {
  const ref = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    const text = ref.current?.value
    if (text) {
      addTodo(text)
      ref.current.value = ''
    }
  }

  return (
    <div className={css.add_todo}>
      <Input
        ref={ref}
        disabled={disabled}
        data-testid='add-todo-input'
        placeholder="What's need to be done?"
      />
      <Button data-testid='add-todo-btn' onClick={handleClick} disabled={disabled}>
        Add
      </Button>
    </div>
  )
}

export default AddTodo
