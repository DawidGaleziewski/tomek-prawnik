import React, { FunctionComponent, Fragment } from 'react'
import { OfferBox } from '../atoms/OfferBox'
import styled from '@emotion/styled';
import { UXContainer } from '../atoms/UXContainer'
import { Typography, TypographyVariants } from '../atoms/Typography'

// Icons
import HammerIcon from '../images/icons/hammer-lg.svg';
import Hammer2Icon from '../images/icons/hammer-2-lg.svg';
import CertIcon from '../images/icons/cert-lg.svg';
import CheckIcon from '../images/icons/check-lg.svg';
import ScalesIcon from '../images/icons/scales-lg.svg';


export const OfferList = () => (
  <OfferListBase>
    <OfferBox headerText="Odszkodowania" headerImg={HammerIcon}>
        Błędy medyczne, wypadki komunikacyjne, katastrofy budowlane, wypadki
        przy pracy i inne
    </OfferBox>
    <OfferBox headerText="Obsługa przedsiębiorców" headerImg={CheckIcon}>
      Prawo korporacyjne i prawo spółek handlowych
    </OfferBox>
    <OfferBox headerText="Prawo karne" headerImg={CertIcon}>
        Obrońca i pełnomocnik w toku postępowania karnego, karnoskarbowego i
        wykroczeniowego Prawo karne gospodarcze
    </OfferBox>
    <OfferBox headerText="Prawo cywilne" headerImg={CheckIcon}>
        Zobowiązania, umowy, dochodzenie wierzytelności, prawo spadkowe
    </OfferBox>
    <OfferBox headerText="Bieżąca obsługa prawna" headerImg={ScalesIcon}>
        Reprezentacja w toku procesu reprezentacja w toku egzekucji,
        sporządzanie opinii prawnych, analiza umów, porady prawne i negocjacje
    </OfferBox>
    <OfferBox headerText="Prawo rodzinne" headerImg={Hammer2Icon}>
        Rozwód i separacja, władza rodzicielska, ustalenie kontaktów, podział
        majątku, alimenty, postępowania w sprawach nieletnich
    </OfferBox>
  </OfferListBase>
)

const OfferListBase = styled.ul`
  /* display: flex;
  flex-wrap: wrap; */
  padding: 0;
  margin: 0;
  /* justify-content: space-between; */
  display: grid;
  grid-template-columns: repeat(3, 33% [col-start]);
  column-gap: 3rem;
  row-gap: 3rem;

  & li {
    /* flex-basis: 32%;
    width: 32%; */
    /* flex-basis: 25%;
    flex-grow: 0;
    flex-shrink: 0; */
  }
`;