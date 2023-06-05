import { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$green300',
  borderRadius: '$md',
  padding: '$2 $4',
  border: 0,
  fontWeight: 'bold',
  color: '$white',

  variants: {
    size: {
      small: {},
      big: {},
    },
  },

  '&:hover': {},
})

export type ButtonProps = ComponentProps<typeof Button>
