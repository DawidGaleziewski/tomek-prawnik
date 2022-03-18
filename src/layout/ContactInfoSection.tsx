import React from 'react'
import { ContactForm } from './ContactForm'
import {css} from '@emotion/react';
import { UXContainer } from '../atoms/UXContainer'
import { Typography, TypographyVariants } from '../atoms/Typography'
import { Section, SectionVariants } from '../atoms/Section'
import {  NavigationSections } from '../layout/Navigation'

// Icons
import MailIcon from '../images/icons/mail.svg';
import MapIcon from '../images/icons/MapPin.svg';
import PhoneIcon from '../images/icons/Phone.svg';


export const ContactInfoSection = () => (
  <Section id={NavigationSections.CONTACT} variant={SectionVariants.FLASHY}>
    <UXContainer>
      <Typography as="h2" variant={TypographyVariants.SECTION_HEADER}>
        Moje dane kontaktowe
      </Typography>

      <span css={textIconHolder}>
          <Typography css={textIconHolder}><MailIcon /> <span>Telefon: +48 501 138 557</span></Typography>
      </span>
      <span css={textIconHolder}>
          <Typography><MapIcon/> Adres: 4517 Washington Ave</Typography>
      </span>
      <span css={textIconHolder}>
        <Typography><PhoneIcon/> Email: tomekm1988@gmail.com</Typography>
      </span>

    </UXContainer>
  </Section>
);

const textIconHolder = css`
    margin-bottom: 1rem;
    display: block;
    & svg {
          line-height: 3.1rem;
          vertical-align: middle;
          margin-right: 1rem;
    }
`;
