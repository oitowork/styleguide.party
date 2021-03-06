import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { atoms, vars } from '../../css'

export const root = recipe({
  base: [
    atoms({
      backgroundColor: 'background',
      borderWidth: '0.5',
      borderColor: 'foregroundSecondary',
      borderRadius: '2xLarge',
      color: 'text',
      display: 'flex',
      height: '14',
      transitionDuration: '150',
      transitionProperty: 'colors',
      transitionTimingFunction: 'inOut',
      width: 'full',
    }),
    style({
      selectors: {
        '&:focus-within': {
          borderColor: vars.colors.accent,
        },
      },
    }),
  ],
  variants: {
    disabled: {
      true: atoms({
        borderColor: 'foregroundSecondary',
      }),
      false: {},
    },
    error: {
      true: style([
        atoms({
          borderColor: 'red',
          cursor: 'default',
        }),
        style({
          selectors: {
            '&:focus-within': {
              borderColor: vars.colors.red,
            },
          },
        }),
      ]),
    },
  },
})

const container = atoms({
  alignItems: 'center',
  display: 'flex',
  height: 'full',
  lineHeight: 'none',
})

const text = atoms({
  color: 'inherit',
  fontFamily: 'sans',
  fontSize: 'base',
  fontWeight: 'medium',
})

export const icon = style([
  container,
  atoms({ paddingLeft: '4', paddingRight: '2' }),
])
export const prefix = style([
  container,
  text,
  atoms({ paddingLeft: '4', paddingRight: '1.5' }),
  style({ lineHeight: 'normal' }),
])

export const input = recipe({
  base: atoms({
    backgroundColor: 'transparent',
    position: 'relative',
    width: 'full',
  }),
  variants: {
    disabled: {
      true: atoms({
        cursor: 'not-allowed',
      }),
      false: {},
    },
  },
})

export const ghost = atoms({
  borderColor: 'transparent',
  inset: '0',
  position: 'absolute',
  pointerEvents: 'none',
  whiteSpace: 'pre',
})

export const variants = recipe({
  base: [style([container, text, atoms({ paddingX: '4' })])],
  variants: {
    icon: {
      true: atoms({
        paddingLeft: 'none',
      }),
    },
    prefix: {
      true: atoms({
        paddingLeft: 'none',
      }),
    },
  },
})

export const maxParent = style({})

export const max = style([
  atoms({
    backgroundColor: 'foregroundSecondary',
    borderRadius: 'medium',
    color: { base: 'textSecondary', hover: 'text' },
    cursor: 'pointer',
    fontSize: 'label',
    fontWeight: 'semiBold',
    height: 'max',
    lineHeight: 'none',
    padding: '2',
    textTransform: 'uppercase',
    transitionDuration: '150',
    transitionProperty: 'colors',
    transitionTimingFunction: 'inOut',
    visibility: 'hidden',
  }),
  style({
    selectors: {
      [`${maxParent}:hover &`]: {
        visibility: 'visible',
      },
      [`${maxParent}:focus-within &`]: {
        visibility: 'visible',
      },
    },
  }),
])
