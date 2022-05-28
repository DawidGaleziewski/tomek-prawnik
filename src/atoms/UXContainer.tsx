import React, { FunctionComponent, ElementType } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const UXContainer: FunctionComponent<{
  as?: ElementType
  zIndex?: number
  flex?: boolean
}> = ({ children, as = 'div', zIndex, flex }) => (
  <UXContainerBase as={as} zIndex={zIndex} flex={flex}>
    {children}
  </UXContainerBase>
)

const UXContainerBase = styled.div<{ zIndex?: number; flex?: boolean }>`
  padding: ${(props) => props.theme.padding.ux_container.mobile};
  ${(props) =>
    props.zIndex &&
    css`
      z-index: ${props.zIndex};
      position: relative;
    `}

  ${(props) =>
    props.flex &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    `}

  @media (min-width: ${(props) => props.theme.breakpoint.medium + 'px'}) {
    max-width: 1050px;
    margin: 0 auto;
  }
`
