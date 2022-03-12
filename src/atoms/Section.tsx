import React, { FunctionComponent, ElementType } from 'react';
import {css} from '@emotion/react';
import styled from '@emotion/styled';

export enum SectionVariants {
    DARK = "dark"
}

interface ISection {
    id?: string,
    as?: ElementType;
    variant?: SectionVariants
}

export const Section: FunctionComponent<ISection> = ({children, as, variant, id}) => <SectionBase id={id} as={as} variant={variant}>{children}</SectionBase>;

interface ISectionBase {
    id?: string,
    as?: ElementType;
    variant?: SectionVariants
}

const SectionBase = styled.section<ISectionBase>`
    padding: ${props => props.theme.padding.section.desktop};
    ${props => props.variant === SectionVariants.DARK && css`
        background-color: ${props.theme.colors.background.dark};
        color: ${props.theme.colors.font.light}
    `}
`;