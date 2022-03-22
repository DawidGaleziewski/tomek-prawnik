import React, { FunctionComponent, ElementType } from 'react';
import {css} from '@emotion/react';
import styled from '@emotion/styled';


export const Textarea = styled.textarea`
    max-width: 60rem;
    width: 100%;
    padding: ${props => props.theme.padding.input.desktop};
    border-radius: ${props => props.theme.radius.input};
    border: none;
    font-size: ${props => props.theme.size.font.input};
    outline: none;
    border-bottom: ${props => props.theme.border.input.default};

    &:focus {
        border-bottom: ${props => props.theme.colors.primary};;
    }
`;