import React, { FunctionComponent } from 'react'
import { UXContainer } from '../atoms/UXContainer'
import { NavLink } from '../atoms/NavLink'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Button } from '../atoms/Button'

export enum NavigationSections {
  ABOUT_ME = 'about-me',
  PRICING = 'pricing',
  CONTACT = 'contact',
}

export const Navigation: FunctionComponent = (props) => {
  return (
    <NavigationBase>
      <UXContainer>
        <div css={flexContainer}>
          <ul>
            <NavLink url={NavigationSections.ABOUT_ME}>O mnie</NavLink>
            <NavLink url={NavigationSections.PRICING}>cennik</NavLink>
            <NavLink url={NavigationSections.CONTACT}>kontakt</NavLink>
          </ul>
          <Button as="a" href="tel:501-138-557" variant="send-form">
            Zadzwoń 501 138 557
          </Button>
        </div>
      </UXContainer>
    </NavigationBase>
  )
}

const flexContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media screen and (max-width: 532px) {
    justify-content: center;
  }
`

const NavigationBase: FunctionComponent = styled.nav`
  padding: ${(props) => props.theme.padding.nav.desktop};
  color: ${(props) => props.theme.colors.font.light};
  position: fixed;
  top: 0;
  z-index: 100;
  left: 0;
  background: linear-gradient(270deg, #295c7a 40.11%, #0072b5 66.58%);
  width: 100%;

  & ul {
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
    padding: 0;
    margin: 0;

    @media screen and (max-width: 532px) {
      display: none;
    }
  }
  & li {
    list-style: none;

    & a {
      text-decoration: none;
      color: inherit;
      font-family: inherit;
      font-size: ${(props) => props.theme.size.font.link};
      cursor: pointer;
      margin-right: 2.6rem;
    }
  }
`
