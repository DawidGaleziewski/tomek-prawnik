import React, { FunctionComponent, ElementType} from 'react'
import { css } from '@emotion/react'
import styled from "@emotion/styled";



export const UXContainer: FunctionComponent<{as?: ElementType, zIndex?: number}> = ({children, as = 'div', zIndex}) => <UXContainerBase as={as}  zIndex={zIndex}>{children}</UXContainerBase>

const UXContainerBase = styled.div<{zIndex?:number}>`
  max-width: 1050px;
  margin: 0 auto;

  ${props => props.zIndex && css`
    z-index: ${props.zIndex};
    position: relative;
  `}
`;