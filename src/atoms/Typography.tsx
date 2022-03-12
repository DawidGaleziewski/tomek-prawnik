import React, { FunctionComponent, ElementType } from 'react';
import {css} from '@emotion/react';
import styled from '@emotion/styled';

export enum TypographyVariants {
    SECTION_HEADER = "section-header"
}

interface ITypography {
    as?: ElementType;
    variant?: TypographyVariants
}

export const Typography: FunctionComponent<ITypography> = ({children, as, variant}) => <TypographyBase as={as} variant={variant}>{children}</TypographyBase>;

interface ITypographyBase {
    as?: ElementType;
    variant?: TypographyVariants
}

const TypographyBase = styled.p<ITypographyBase>`
    margin: 0;
    ${props => props.variant === TypographyVariants.SECTION_HEADER && css`
        font-size: ${props.theme.size.font.h2};
        text-align: center;
        padding: ${props.theme.padding.sectionHeader.desktop}
    `}
`;