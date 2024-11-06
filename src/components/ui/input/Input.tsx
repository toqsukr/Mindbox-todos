import cn from 'clsx'
import { forwardRef, HTMLProps } from 'react'
import css from './Input.module.scss'

const Input = forwardRef<HTMLInputElement, HTMLProps<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return <input {...props} ref={ref} className={cn(css.input, className)} />
  }
)

export default Input
