import React from 'react'
import { ContactForm } from './ContactForm'
import { css } from '@emotion/react'
import { UXContainer } from '../atoms/UXContainer'
import { Typography, TypographyVariants } from '../atoms/Typography'
import { Section, SectionVariants } from '../atoms/Section'
import { NavigationSections } from '../layout/Navigation'

// Icons
import MailIcon from '../images/icons/mail.svg'
import MapIcon from '../images/icons/MapPin.svg'
import PhoneIcon from '../images/icons/Phone.svg'
import { ContactMap } from '../components/ContactMap'

export const ContactInfoSection = () => (
  <Section
    id={NavigationSections.CONTACT}
    variant={SectionVariants.FLASHY}
    as="address"
  >
    <UXContainer>
      <Typography as="h2" variant={TypographyVariants.SECTION_HEADER}>
        Moje dane kontaktowe
      </Typography>

      <span css={textIconHolder}>
        <Typography css={textIconHolder}>
          <MailIcon /> <span>Telefon: +48 501 138 557</span>
        </Typography>
      </span>
      <span css={textIconHolder}>
        <Typography>
          <MapIcon /> Adres: ul. Pańska 21/27, 05-800 Pruszków
        </Typography>
      </span>
      <span css={textIconHolder}>
        <Typography>
          <PhoneIcon /> Email:{' '}
          <a css={linkNormalize} href="mailto:tomaszmikusek.apl@gmail.com">
            tomaszmikusek.apl@gmail.com
          </a>
        </Typography>
      </span>
      <ContactMap />
    </UXContainer>
  </Section>
)

const textIconHolder = css`
  margin-bottom: 1rem;
  display: block;
  & svg {
    line-height: 3.1rem;
    vertical-align: middle;
    margin-right: 1rem;
  }
`

const linkNormalize = css`
  color: inherit;
  &:hover {
    color: inherit;
  }
`
