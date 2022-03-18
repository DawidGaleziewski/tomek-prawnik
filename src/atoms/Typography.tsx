import React, { FunctionComponent, ElementType } from 'react';
import {css} from '@emotion/react';
import styled from '@emotion/styled';

export enum TypographyVariants {
    MAIN_HEADER = "main-header",
    SECTION_HEADER = "section-header",
    CARD_HEADER = "card-header",
    BODY = "body"
}

interface ITypography {
    as?: ElementType;
    variant?: TypographyVariants
}

export const Typography: FunctionComponent<ITypography> = ({children, as, variant}) => <TypographyBase as={as} variant={variant ? variant : TypographyVariants.BODY}>{children}</TypographyBase>;

interface ITypographyBase {
    as?: ElementType;
    variant?: TypographyVariants
}

const TypographyBase = styled.p<ITypographyBase>`
    margin: 0;
    font-size: ${props => props.theme.size.font.p};

    ${props => props.variant === TypographyVariants.MAIN_HEADER && css`
        text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.5);
        color: ${props.theme.colors.font.light};
        font-size: ${props.theme.size.font.h1};
        text-align: left;
        padding: ${props.theme.padding.sectionHeader.desktop};
        font-family: ${props.theme.fontFamily.header}
    `}

    ${props => props.variant === TypographyVariants.SECTION_HEADER && css`
        font-size: ${props.theme.size.font.h2};
        text-align: center;
        padding: ${props.theme.padding.sectionHeader.desktop};
        font-family: ${props.theme.fontFamily.header}
    `}

    ${props => props.variant === TypographyVariants.CARD_HEADER && css`
        font-size: ${props.theme.size.font.card_header};
        font-weight: ${props.theme.weight.bold};
        color: ${props.theme.colors.font.dark};
    `}

    ${props => props.variant === TypographyVariants.BODY && css`
        line-height: 2rem;
    `}

`;