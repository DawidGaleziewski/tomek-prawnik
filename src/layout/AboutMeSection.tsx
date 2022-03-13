import React, { FunctionComponent, Fragment } from 'react'
import { Section, SectionVariants } from '../atoms/Section'
import { Typography, TypographyVariants } from '../atoms/Typography'
import { UXContainer } from '../atoms/UXContainer'
import { Navigation, NavigationSections } from '../layout/Navigation'
import {Image} from "../atoms/Image";
import {css} from '@emotion/react';

export const AboutMeSection = () => (
  <Section id={NavigationSections.ABOUT_ME} variant={SectionVariants.DARK}>
    <UXContainer>
      <Typography as="h2" variant={TypographyVariants.SECTION_HEADER}>
        Kim jestem?
      </Typography>

      <div css={swapWrapper}>
        <div css={imageColumn}>
          <Image src="tomasz.png"/>
        </div>
        <div css={textColumn}>
          <Typography as="h2" variant={TypographyVariants.SECTION_HEADER}>
            Tomasz Mikusek
          </Typography>
          <Typography>
            Jestem radcą prawnym wpisanym na listę radców prawnych prowadzoną
            przez Okręgową Izbę Radców Prawnych w Warszawie - wpis nr WA-14592.
          </Typography>
          <Typography>
            Posiadam wieloletnie doświadczenie zawodowe pozwalające na rzetelne
            prowadzenie powierzonych mi przez Państwa spraw, a obowiązek
            doskonalenia zawodowego oraz chęć podnoszenia kwalifikacji i
            samokształcenia prowadzi do ciągłego podnoszenia poziomu świadczonej
            obsługi prawnej.
          </Typography>
          <Typography>
            Gwarantuję, iż podjęte przeze mnie z należytą starannością działania,
            optymalnie zabezpieczają interesy klienta.
          </Typography>
        </div>
      </div>
      <div css={swapWrapper}>
        <div css={textColumn}>
          <Typography>
            Ukończyłem studia prawnicze na Wydziale Prawa i Administracji
            Uniwersytetu Marii Curie- Skłodowskiej w Lublinie, a następnie
            aplikację radcowską przy Okręgowej Izbie Radców Prawnych w Warszawie.
          </Typography>
          <Typography>
            Studiowałem również filologię rosyjską (specjalizacja: język rosyjski
            w biznesie) na Wydziale Humanistycznym Uniwersytetu Marii
            Curie-Skłodowskiej.
          </Typography>
        </div>
        <div css={imageColumn}>
          <Image src="izba.png"/>
        </div>
      </div>
    </UXContainer>
  </Section>
);

const swapWrapper = css`
        display: flex;
        align-items: center;
        jusify-content: space-between;
      `

const textColumn = css`
          max-width: 60rem;
        `

const imageColumn = (props) => css`
            width: 313px;
            border: ${props.border.card.light};
          `
