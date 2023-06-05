import { Button, ButtonProps } from '@ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Enviar',
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: 'Ok',
    size: 'big',
  },
}
