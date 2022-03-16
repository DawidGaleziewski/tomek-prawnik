import React from 'react'
import { ContactForm } from './ContactForm'
import { UXContainer } from '../atoms/UXContainer'
import { Typography, TypographyVariants } from '../atoms/Typography'
import { Section, SectionVariants } from '../atoms/Section'
import {  NavigationSections } from '../layout/Navigation'

export const ContactSection = () => (
  <Section id={NavigationSections.CONTACT} variant={SectionVariants.DARK}>
    <UXContainer>
      <Typography as="h2" variant={TypographyVariants.SECTION_HEADER}>
        Skontaktuj się
      </Typography>
      <ContactForm />
    </UXContainer>
  </Section>
)
