import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Typography, TypographyVariants } from './Typography';

interface IOfferBox {
  headerText: string
  headerImg: string
}

export const OfferBox: FunctionComponent<IOfferBox> = ({headerImg:HeaderImg, headerText, children}) => {
  return (
    <OfferBoxBase>
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
        <Typography variant={TypographyVariants.CARD_HEADER}>
          {headerText}</Typography></div>
        <Typography>{children}</Typography>
      </article>
    </OfferBoxBase>
  )
};

const OfferBoxBase = styled.li`
  list-style: none;
  background-color: ${props => props.theme.colors.background.light};
  color: ${props => props.theme.colors.font.grey};
  padding: ${props => props.theme.padding.offerBox.desktop};
  border: ${props => props.theme.border.card.light};
`;