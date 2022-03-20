import React, { FunctionComponent, Fragment } from 'react'
import { Section, SectionVariants } from '../atoms/Section'
import { Typography, TypographyVariants } from '../atoms/Typography'
import { UXContainer } from '../atoms/UXContainer'
import { Navigation, NavigationSections } from '../layout/Navigation'
import {Image} from "../atoms/Image";
import {css} from '@emotion/react';

export const PricingSection = () => (
  <Section id={NavigationSections.PRICING} variant={SectionVariants.DARK}>
    <UXContainer>
      <Typography as="h2" variant={TypographyVariants.SECTION_HEADER}>
        Wynagrodzenie
      </Typography>
          <Typography>
            Wynagrodzenie zawsze jest ustalane indywidualnie z klientem, w
            zależności od charakteru prowadzonej sprawy, stopnia jej
            skomplikowania oraz nakładu pracy - po dokonaniu jej wstępnej analizy.
          </Typography>
          <Typography>
            Z uwagi na powyższe istnieje wiele form dokonywania rozliczeń:
          </Typography>
          <Typography>
            - ryczałt (za konkretne czynności podejmowane w sprawie, prowadzenie
            danego etapu sprawy bądź za poprowadzenie całej sprawy),
          </Typography>
          <Typography>
            - wynagrodzenie okresowe/abonamentowe (miesięczne) za obsługę prawną
            (np. przedsiębiorstw) obliczaną stosownie do ustalonej liczby godzin
            określonej indywidualnie w umowie,
          </Typography>
          <Typography>- wynagrodzenie godzinowe,</Typography>
          <Typography>
            -wynagrodzenie, tzw. success fee, tj. prowizyjne.
          </Typography>
    </UXContainer>
  </Section>
)


const textColumn = css`
          max-width: 50%;
        `

