import React, { FunctionComponent, ElementType } from 'react'
import styled from '@emotion/styled';

interface ITypography {
    as?: ElementType
}

export const Typography: FunctionComponent<ITypography> = ({children, as}) => <TypographyBase as={as}>{children}</TypographyBase>;



interface ITypographyBase {
    as?: ElementType
}

const TypographyBase = styled.p<ITypographyBase>`
    ${props => props.theme.colors.background}
`;

{/* <Tag>{children}</Tag> */}