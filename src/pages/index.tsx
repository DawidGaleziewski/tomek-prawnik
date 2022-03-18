import React, { Fragment } from 'react'
import { ThemeProvider } from '@emotion/react'
import 'normalize.css'
import '../theme/global.css'
import { LAWTheme, ILAWTheme } from '../theme/law'
// componets
import { Navigation } from '../layout/Navigation';
import { MainSection } from "../layout/MainSection";
import { OfferSection } from '../layout/OfferSection';
import { AboutMeSection } from "../layout/AboutMeSection";
import { PricingSection } from "../layout/PricingSection";
import { ContactSection } from "../layout/ContactSection";
import { ContactInfoSection } from "../layout/ContactInfoSection";



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
          <ContactInfoSection />
          <PricingSection />
          <ContactSection />
        </main>

      </Fragment>
    </ThemeProvider>
  )
}

export default IndexPage
