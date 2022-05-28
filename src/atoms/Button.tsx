import React, { FunctionComponent, ElementType } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

export enum ButtonVariants {
  SEND_FORM = 'send-form',
}

interface IButton {
  variant: ButtonVariants
  as?: 'a'
  href?: string
}

export const Button = styled.button<IButton>`
  font-family: inherit;
  font-size: ${(props) => props.theme.size.font.button};
  border: 2px solid;
  padding: ${(props) => props.theme.padding.button.desktop};
  border-radius: ${(props) => props.theme.radius.button};
  cursor: pointer;
  text-decoration: none;

  ${(props) =>
    props.variant === ButtonVariants.SEND_FORM &&
    css`
      background-color: ${props.theme.colors.primary};
      border-color: ${props.theme.colors.primary};
      color: ${props.theme.colors.font.light};
      transition: ${props.theme.transition.hover};

      &:hover {
        background-color: ${props.theme.colors.background.light};
        color: ${props.theme.colors.primary};
      }
    `}

  ${(props) =>
    props.disabled &&
    css`
      transition: none;
      background-color: ${props.theme.colors.state.disabled};
      border-color: ${props.theme.colors.state.disabled};
      color: ${props.theme.colors.font.light};
      cursor: not-allowed;

      &:hover {
        background-color: ${props.theme.colors.state.disabled};
        border-color: ${props.theme.colors.state.disabled};
        color: ${props.theme.colors.font.light};
        cursor: not-allowed;
      }
    `}
`
