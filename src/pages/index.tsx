import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from '@emotion/react'
import 'normalize.css'
import '../theme/global.css'
import { LAWTheme, ILAWTheme } from '../theme/law'
// componets
import { Navigation } from '../layout/Navigation'
import { MainSection } from '../layout/MainSection'
import { OfferSection } from '../layout/OfferSection'
import { AboutMeSection } from '../layout/AboutMeSection'
import { PricingSection } from '../layout/PricingSection'
import { ContactSection } from '../layout/ContactSection'
import { ContactInfoSection } from '../layout/ContactInfoSection'

declare module '@emotion/react' {
  export interface Theme extends ILAWTheme {}
}

// markup
const IndexPage = () => {
  return (
    <ThemeProvider theme={LAWTheme}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <title>Tomasz Mikusek - radca prawny prószków</title>
        <link rel="canonical" href="http://tomasz-mikusek.com/example" />
        <meta
          name="description"
          content="Tomasz Mikusek - radca prawny prószków. Prawo cywilne. Doradztwo prawne. Kancelaria prawna"
        />
      </Helmet>
      <Fragment>
        <Navigation />

        <main>
          <MainSection />
          <OfferSection />
          <AboutMeSection />
          <ContactInfoSection />
          <ContactSection />
          <PricingSection />
        </main>
      </Fragment>
    </ThemeProvider>
  )
}

export default IndexPage
