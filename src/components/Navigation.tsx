import React, { FunctionComponent } from 'react'
import { UXContainer } from '../atoms/UXContainer'
import { NavLink } from '../atoms/NavLink'
import styled from '@emotion/styled'

export enum NavigationSections {
  ABOUT_ME = '#about-me',
  PRICING = '#pricing',
  CONTACT = '#contact',
}

export const Navigation: FunctionComponent = (props) => {
  return (
    <UXContainer>
      <NavigationBase>
        <ul>
          <NavLink url={NavigationSections.ABOUT_ME}>O mnie</NavLink>
          <NavLink url={NavigationSections.PRICING}>cennik</NavLink>
          <NavLink url={NavigationSections.CONTACT}>kontakt</NavLink>
        </ul>
      </NavigationBase>
    </UXContainer>
  )
}

const NavigationBase: FunctionComponent = styled.nav`
  padding: ${props => props.theme.padding.nav.desktop};
  
  & ul {
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
    padding: 0;
    margin:0;
  }
  & li {
    list-style: none;
  }

  & a {
    text-decoration: none;
    color: inherit;
    font-family: inherit;
    font-size: ${(props) => props.theme.size.font.link};
    cursor: pointer;
    margin-right: 2.6rem;
  }
`
