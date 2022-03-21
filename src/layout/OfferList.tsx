import React from 'react'
import { OfferBox, OfferBoxVariant } from '../atoms/OfferBox'
import styled from '@emotion/styled';

// Icons
import HammerIcon from '../images/icons/hammer-lg.svg';
import Hammer2Icon from '../images/icons/hammer-2-lg.svg';
import CertIcon from '../images/icons/cert-lg.svg';
import CheckIcon from '../images/icons/check-lg.svg';
import ScalesIcon from '../images/icons/scales-lg.svg';

import HammerLight from "../images/icons/hammer_light.svg";
import CertificateLight from "../images/icons/cartificate_light.svg"

export const OfferList = () => (
  <OfferListBase>
    <OfferBox headerText="Odszkodowania" headerImg={HammerIcon}>
        Błędy medyczne, wypadki komunikacyjne, katastrofy budowlane, wypadki
        przy pracy i inne
    </OfferBox>
    <OfferBox variant={OfferBoxVariant.SPECIAL} headerText="Obsługa przedsiębiorców" headerImg={CertificateLight}>
      Prawo korporacyjne i prawo spółek handlowych
    </OfferBox>
    <OfferBox headerText="Prawo karne" headerImg={CertIcon}>
        Obrońca i pełnomocnik w toku postępowania karnego, karnoskarbowego i
        wykroczeniowego Prawo karne gospodarcze
    </OfferBox>

    <OfferBox variant={OfferBoxVariant.SPECIAL} headerText="Prawo cywilne" headerImg={HammerLight}>
        Zobowiązania, umowy, dochodzenie wierzytelności, prawo spadkowe
    </OfferBox>
    <OfferBox headerText="Bieżąca obsługa prawna" headerImg={ScalesIcon}>
        Reprezentacja w toku procesu reprezentacja w toku egzekucji,
        sporządzanie opinii prawnych, analiza umów, porady prawne i negocjacje
    </OfferBox>
    <OfferBox variant={OfferBoxVariant.SPECIAL} headerText="Prawo rodzinne" headerImg={CertificateLight}>
        Rozwód i separacja, władza rodzicielska, ustalenie kontaktów, podział
        majątku, alimenty, postępowania w sprawach nieletnich
    </OfferBox>
  </OfferListBase>
)

const OfferListBase = styled.ul`
  padding: 0;
  margin: 0;

  display: block;
  & > li {
     margin-bottom: 3rem;
  }

  @media (min-width: ${props => props.theme.breakpoint.medium + 'px'}){
    display: grid;
    grid-template-columns: repeat(3, 33% [col-start]);
    column-gap: 3rem;
    row-gap: 3rem;

    & > li {
      margin-bottom: 0;
    }
  }
`;