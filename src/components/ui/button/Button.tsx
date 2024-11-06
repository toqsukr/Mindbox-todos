import cn from 'clsx'
import { FC, HTMLProps, PropsWithChildren } from 'react'
import css from './Button.module.scss'

const Button: FC<PropsWithChildren<HTMLProps<HTMLButtonElement>>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button {...props} type='button' className={cn(css.button, className)}>
      {children}
    </button>
  )
}

export default Button
