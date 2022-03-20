import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Typography, TypographyVariants } from './Typography';


export enum OfferBoxVariant {
  SPECIAL = "special"
};

interface IOfferBox {
  headerText: string,
  headerImg: string,
  variant?: OfferBoxVariant
}

export const OfferBox: FunctionComponent<IOfferBox> = ({headerImg:HeaderImg, headerText, children, variant}) => {
  return (
    <OfferBoxBase variant={variant}>
      <article>
        <div css={(props) => css`
          display: flex;
          align-items: center;
          margin: ${props.margin.cardHeader.desktop};

          & svg {
            margin-right: 1.6rem;
          }
        `}>
        {HeaderImg && <HeaderImg />}
        <Typography variant={ variant === OfferBoxVariant.SPECIAL ? TypographyVariants.CARD_HEADER_SPECIAL : TypographyVariants.CARD_HEADER}>
          {headerText}</Typography></div>
        <Typography>{children}</Typography>
      </article>
    </OfferBoxBase>
  )
};

const OfferBoxBase = styled.li<{variant?: OfferBoxVariant}>`
  list-style: none;
  background-color: ${props => props.theme.colors.background.light};
  color: ${props => props.theme.colors.font.grey};
  padding: ${props => props.theme.padding.offerBox.desktop};
  border: ${props => props.theme.border.card.light};

  ${props => props.variant === OfferBoxVariant.SPECIAL && css`
    background-color: ${props.theme.colors.background.special};
    color: ${props.theme.colors.font.light};
    border: none;
  `}
`;