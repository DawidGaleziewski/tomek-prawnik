import React, { FunctionComponent, Fragment } from 'react'
import { OfferBox } from '../atoms/OfferBox'
import { UXContainer } from '../atoms/UXContainer'
import { Typography, TypographyVariants } from '../atoms/Typography'

// Icons
import HammerIcon from '../images/icons/hammer-lg.svg'

export const OfferList = () => (
  <div>
    <OfferBox headerText="Odszkodowania" headerImg="test">
        <HammerIcon />
      <Typography>
        Błędy medyczne, wypadki komunikacyjne, katastrofy budowlane, wypadki
        przy pracy i inne
      </Typography>
    </OfferBox>
    <OfferBox headerText="Obsługa przedsiębiorców" headerImg="test">
      <Typography>Prawo korporacyjne i prawo spółek handlowych</Typography>
    </OfferBox>
    <OfferBox headerText="Prawo karne" headerImg="test">
      <Typography>
        Obrońca i pełnomocnik w toku postępowania karnego, karnoskarbowego i
        wykroczeniowego Prawo karne gospodarcze
      </Typography>
    </OfferBox>
    <OfferBox headerText="Prawo cywilne" headerImg="test">
      <Typography>
        Zobowiązania, umowy, dochodzenie wierzytelności, prawo spadkowe
      </Typography>
    </OfferBox>
    <OfferBox headerText="Bieżąca obsługa prawna" headerImg="test">
      <Typography>
        Reprezentacja w toku procesu reprezentacja w toku egzekucji,
        sporządzanie opinii prawnych, analiza umów, porady prawne i negocjacje
      </Typography>
    </OfferBox>
    <OfferBox headerText="Prawo rodzinne" headerImg="test">
      <Typography>
        Rozwód i separacja, władza rodzicielska, ustalenie kontaktów, podział
        majątku, alimenty, postępowania w sprawach nieletnich
      </Typography>
    </OfferBox>
  </div>
)
