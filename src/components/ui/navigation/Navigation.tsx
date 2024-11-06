import cn from 'clsx'
import { FC } from 'react'
import css from './Navigation.module.scss'
import { NavigationProp } from './Navigation.type'

const Navigation: FC<NavigationProp> = ({ elements }) => {
  return (
    <nav className={css.navigation}>
      {elements.map(({ onClick, text, active }, idx) => (
        <span key={idx} className={cn(css.elem, { [css.active]: active })} onClick={onClick}>
          {text}
        </span>
      ))}
    </nav>
  )
}

export default Navigation
