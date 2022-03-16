import React, { FunctionComponent, ElementType } from 'react';
import {css} from '@emotion/react';
import styled from '@emotion/styled';
import {scrollTo} from '../hooks/useScroll';

interface INavLink {
    url: string;
}

export const NavLink:FunctionComponent<INavLink> = (props) => <li><a onClick={(event)=> {
    event.preventDefault();
    scrollTo(props.url);
    }} href={props.url}>{props.children}</a></li>