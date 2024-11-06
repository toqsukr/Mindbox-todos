import { HTMLAttributes } from 'react'

export type NavigationProp = {
  elements: NavigationElemProp[]
}

type NavigationElemProp = {
  text: string
  active?: boolean
} & Pick<HTMLAttributes<HTMLButtonElement>, 'onClick'>
