import React, { FunctionComponent, Fragment } from 'react'
import { ThemeProvider, css } from '@emotion/react'
import 'normalize.css'
import '../theme/global.css'
import { LAWTheme, ILAWTheme } from '../theme/law'
// componets
import { UXContainer } from '../atoms/UXContainer'
import { Typography, TypographyVariants } from '../atoms/Typography'
import { Section, SectionVariants } from '../atoms/Section'
import { Navigation, NavigationSections } from '../layout/Navigation';
import { MainSection } from "../layout/MainSection";
import { OfferSection } from '../layout/OfferSection';
import { AboutMeSection } from "../layout/AboutMeSection";
import { PricingSection } from "../layout/PricingSection";
import { Button, ButtonVariants } from '../atoms/Button';
import { InputSlider } from '../atoms/Input';
import { Textarea } from '../atoms/Textarea';


declare module '@emotion/react' {
  export interface Theme extends ILAWTheme {}
}

// markup
const IndexPage = () => {

  return (
    <ThemeProvider theme={LAWTheme}>
      <Fragment>
        <Navigation />

        <main>

          <MainSection />
          <OfferSection />
          <AboutMeSection />
          <PricingSection />

          <Section id={NavigationSections.CONTACT} variant={SectionVariants.DARK}>
            <UXContainer>
              <Typography as="h2" variant={TypographyVariants.SECTION_HEADER}>
                Skontaktuj się
              </Typography>
              <form css={css`
                max-width: 60rem;
                margin: 0 auto;
              `}>
                 <div css={css`
                      display: flex;
                      justify-content: space-between;

                      & .input-slider-wrapper {
                        width: calc(50% - 3rem);
                        margin-bottom: 2rem;
                      }
                    `}>
                    <InputSlider id="name" labelText="Imię" type="text" name="name" onChange={() => null}  />
                    <InputSlider id="email" labelText="Email" type="email" name="email" onChange={() => null}   />
                 </div>
                 <Textarea css={css`
                  margin-bottom:4rem;
                  `} rows={7}></Textarea>

                <Button variant={ButtonVariants.SEND_FORM}>
                  Wyślij
                </Button>
              </form>
            </UXContainer>
          </Section>
        </main>
      </Fragment>
    </ThemeProvider>
  )
}

export default IndexPage
