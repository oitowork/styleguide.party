import * as React from 'react'

import { Atoms } from '~/styles/atoms.css'
import { createVariants } from '~/utils'
import { Box } from '../box'

const variants = createVariants({
  base: {},
  description: {
    fontSize: { sm: 'lg', md: 'xl' },
    wordWrap: 'break-word',
    letterSpacing: { sm: 'normal', md: 'snug' },
    fontWeight: 550,
    color: 'textTertiary',
  },
  title: {
    color: 'text',
    fontSize: { sm: '3xl', md: '4xl', lg: '5xl' },
    fontWeight: 'semibold',
    letterSpacing: { sm: 'snug', md: 'tight' },
    lineHeight: { sm: 'snug', md: 'tight' },
  },
})

type Props = {
  as?: 'div' | 'span' | 'p' | 'label' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: React.ReactNode
  color?: Atoms['color']
  fontFamily?: Atoms['fontFamily']
  variant?: keyof typeof variants
  weight?: Atoms['fontWeight']
}

export const Text = ({
  as = 'div',
  color = 'foreground',
  children,
  fontFamily = 'sans',
  variant = 'base',
  weight,
}: Props) => {
  return (
    <Box
      as={as}
      color={color}
      fontFamily={fontFamily}
      fontWeight={weight}
      {...variants[variant]}
    >
      {children}
    </Box>
  )
}