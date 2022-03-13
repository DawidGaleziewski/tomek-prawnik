import React, { FunctionComponent, Fragment } from 'react'
import { Section, SectionVariants } from '../atoms/Section'
import { Typography, TypographyVariants } from '../atoms/Typography'
import { UXContainer } from '../atoms/UXContainer'
import { OfferList } from '../layout/OfferList'

export const OfferSection = () => (
  <Section variant={SectionVariants.DARK}>
    <UXContainer>
      <Typography as="h2" variant={TypographyVariants.SECTION_HEADER}>
        Zakres usług
      </Typography>

      <OfferList />
    </UXContainer>
  </Section>
)
