import React, { FunctionComponent, ElementType} from 'react'
import { css } from '@emotion/react'

const UXContainerStyle = css`
  max-width: 1050px;
  margin: 0 auto;
`

export const UXContainer: FunctionComponent<{as?: ElementType}> = ({children, as: Tag = 'div'}) => <Tag css={UXContainerStyle}>{children}</Tag>

