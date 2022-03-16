import React, { FunctionComponent, ElementType } from 'react';
import {css} from '@emotion/react';
import styled from '@emotion/styled';

export enum SectionVariants {
    DARK = "dark"
}

interface ISection {
    id?: string,
    as?: ElementType;
    variant?: SectionVariants;
    backgroundImg?: {
        desktop?: string;
        mobile?: string;
    }
}

export const Section = styled.section<ISection>`
    padding: ${props => props.theme.padding.section.desktop};
    ${props => props.variant === SectionVariants.DARK && css`
        background-color: ${props.theme.colors.background.dark};
        color: ${props.theme.colors.font.light}
    `};

    ${props => props.backgroundImg?.desktop && css`
        background-image: url(${props.backgroundImg.desktop});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    `}
`;