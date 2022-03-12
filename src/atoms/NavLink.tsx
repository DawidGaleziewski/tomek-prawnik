import React, { FunctionComponent, ElementType } from 'react';
import {css} from '@emotion/react';
import styled from '@emotion/styled';

interface INavLink {
    url: string;
}

export const NavLink:FunctionComponent<INavLink> = (props) => <li><a href={props.url}>{props.children}</a></li>