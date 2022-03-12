import React, { FunctionComponent, Fragment } from 'react'
import { ThemeProvider } from '@emotion/react'
import 'normalize.css'
import '../theme/global.css'
import { LAWTheme, ILAWTheme } from '../theme/law'
// componets
import { UXContainer } from '../atoms/UXContainer'
import { Typography, TypographyVariants } from '../atoms/Typography'
import { Section, SectionVariants } from '../atoms/Section'
import { Navigation, NavigationSections } from '../components/Navigation';
import {MainSection} from "../components/MainSection";

interface IOfferBox {
  headerText: string
  headerImg: string
}

declare module '@emotion/react' {
  export interface Theme extends ILAWTheme {}
}

const OfferBox: FunctionComponent<IOfferBox> = (props) => {
  return (
    <article>
      <h3>
        <img src={props.headerImg} alt="ikona" />
        {props.headerText}
      </h3>
      <div>{props.children}</div>
    </article>
  )
}

// markup
const IndexPage = () => {
  return (
    <ThemeProvider theme={LAWTheme}>
      <Fragment>
        <Navigation />

        <main>

          <MainSection />

          <Section variant={SectionVariants.DARK}>
            <UXContainer>
              <Typography as="h2" variant={TypographyVariants.SECTION_HEADER}>
                Zakres usług
              </Typography>
              <div>
                <OfferBox headerText="Odszkodowania" headerImg="test">
                  <Typography>
                    Błędy medyczne, wypadki komunikacyjne, katastrofy budowlane,
                    wypadki przy pracy i inne
                  </Typography>
                </OfferBox>
                <OfferBox headerText="Obsługa przedsiębiorców" headerImg="test">
                  <Typography>
                    Prawo korporacyjne i prawo spółek handlowych
                  </Typography>
                </OfferBox>
                <OfferBox headerText="Prawo karne" headerImg="test">
                  <Typography>
                    Obrońca i pełnomocnik w toku postępowania karnego,
                    karnoskarbowego i wykroczeniowego Prawo karne gospodarcze
                  </Typography>
                </OfferBox>
                <OfferBox headerText="Prawo cywilne" headerImg="test">
                  <Typography>
                    Zobowiązania, umowy, dochodzenie wierzytelności, prawo
                    spadkowe
                  </Typography>
                </OfferBox>
                <OfferBox headerText="Bieżąca obsługa prawna" headerImg="test">
                  <Typography>
                    Reprezentacja w toku procesu reprezentacja w toku egzekucji,
                    sporządzanie opinii prawnych, analiza umów, porady prawne i
                    negocjacje
                  </Typography>
                </OfferBox>
                <OfferBox headerText="Prawo rodzinne" headerImg="test">
                  <Typography>
                    Rozwód i separacja, władza rodzicielska, ustalenie
                    kontaktów, podział majątku, alimenty, postępowania w
                    sprawach nieletnich
                  </Typography>
                </OfferBox>
              </div>
            </UXContainer>
          </Section>

          <Section id={NavigationSections.ABOUT_ME} variant={SectionVariants.DARK}>
            <UXContainer>
              <Typography as="h2" variant={TypographyVariants.SECTION_HEADER}>
                Kim jestem?
              </Typography>

              <div>
                <Typography as="h2" variant={TypographyVariants.SECTION_HEADER}>
                  Tomasz Mikusek
                </Typography>

                <Typography>
                  Jestem radcą prawnym wpisanym na listę radców prawnych
                  prowadzoną przez Okręgową Izbę Radców Prawnych w Warszawie -
                  wpis nr WA-14592.
                </Typography>
                <Typography>
                  Posiadam wieloletnie doświadczenie zawodowe pozwalające na
                  rzetelne prowadzenie powierzonych mi przez Państwa spraw, a
                  obowiązek doskonalenia zawodowego oraz chęć podnoszenia
                  kwalifikacji i samokształcenia prowadzi do ciągłego
                  podnoszenia poziomu świadczonej obsługi prawnej.
                </Typography>
                <Typography>
                  Gwarantuję, iż podjęte przeze mnie z należytą starannością
                  działania, optymalnie zabezpieczają interesy klienta.
                </Typography>
              </div>
              <div>
                <Typography>
                  Ukończyłem studia prawnicze na Wydziale Prawa i Administracji
                  Uniwersytetu Marii Curie- Skłodowskiej w Lublinie, a następnie
                  aplikację radcowską przy Okręgowej Izbie Radców Prawnych w
                  Warszawie.
                </Typography>
                <Typography>
                  Studiowałem również filologię rosyjską (specjalizacja: język
                  rosyjski w biznesie) na Wydziale Humanistycznym Uniwersytetu
                  Marii Curie-Skłodowskiej.
                </Typography>
              </div>
            </UXContainer>
          </Section>

          <Section id={NavigationSections.PRICING} variant={SectionVariants.DARK}>
            <UXContainer>
              <Typography as="h2" variant={TypographyVariants.SECTION_HEADER}>
                Wynagrodzenie
              </Typography>

              <div>
                <Typography>
                  Wynagrodzenie zawsze jest ustalane indywidualnie z klientem, w
                  zależności od charakteru prowadzonej sprawy, stopnia jej
                  skomplikowania oraz nakładu pracy - po dokonaniu jej wstępnej
                  analizy.
                </Typography>
                <Typography>
                  Z uwagi na powyższe istnieje wiele form dokonywania rozliczeń:
                </Typography>
                <Typography>
                  - ryczałt (za konkretne czynności podejmowane w sprawie,
                  prowadzenie danego etapu sprawy bądź za poprowadzenie całej
                  sprawy),
                </Typography>
                <Typography>
                  - wynagrodzenie okresowe/abonamentowe (miesięczne) za obsługę
                  prawną (np. przedsiębiorstw) obliczaną stosownie do ustalonej
                  liczby godzin określonej indywidualnie w umowie,
                </Typography>
                <Typography>- wynagrodzenie godzinowe,</Typography>
                <Typography>- wynagrodzenie godzinowe,</Typography>
                <Typography>
                  -wynagrodzenie, tzw. success fee, tj. prowizyjne.
                </Typography>
              </div>
            </UXContainer>
          </Section>

          <Section id={NavigationSections.CONTACT} variant={SectionVariants.DARK}>
            <UXContainer>
              <Typography as="h2" variant={TypographyVariants.SECTION_HEADER}>
                Skontaktuj się
              </Typography>
              <form>
                <div>
                  <label>Imię</label>
                  <input />
                </div>
              </form>
            </UXContainer>
          </Section>
        </main>
      </Fragment>
    </ThemeProvider>
  )
}

export default IndexPage
