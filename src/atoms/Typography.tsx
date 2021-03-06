import React, { FunctionComponent, ElementType } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

export enum TypographyVariants {
  MAIN_HEADER = 'main-header',
  SECTION_HEADER = 'section-header',
  CARD_HEADER = 'card-header',
  CARD_HEADER_SPECIAL = 'card-header-special',
  BODY = 'body',
}

interface ITypography {
  as?: ElementType
  variant?: TypographyVariants
  className?: string
}

export const Typography: FunctionComponent<ITypography> = ({
  children,
  as,
  variant,
  className,
}) => (
  <TypographyBase
    className={className}
    as={as}
    variant={variant ? variant : TypographyVariants.BODY}
  >
    {children}
  </TypographyBase>
)

interface ITypographyBase {
  as?: ElementType
  variant?: TypographyVariants
  className?: string
}

const TypographyBase = styled.p<ITypographyBase>`
  margin: 0;
  font-size: ${(props) => props.theme.size.font.p};

  ${(props) =>
    props.variant === TypographyVariants.MAIN_HEADER &&
    css`
      text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.5);
      color: ${props.theme.colors.font.light};
      padding: ${props.theme.padding.sectionHeader.desktop};
      font-family: ${props.theme.fontFamily.header};
      font-size: ${props.theme.size.font.h2};
      text-align: center;

      @media (min-width: ${props.theme.breakpoint.medium + 'px'}) {
        font-size: ${props.theme.size.font.h1};
        text-align: left;
      }
    `}

  ${(props) =>
    props.variant === TypographyVariants.SECTION_HEADER &&
    css`
      font-size: ${props.theme.size.font.h2};
      text-align: center;
      padding: ${props.theme.padding.sectionHeader.desktop};
      font-family: ${props.theme.fontFamily.header};
    `}

    ${(props) =>
    props.variant === TypographyVariants.CARD_HEADER &&
    css`
      font-size: ${props.theme.size.font.card_header};
      font-weight: ${props.theme.weight.bold};
      color: ${props.theme.colors.font.dark};
      font-family: ${props.theme.fontFamily.header};
    `}

    ${(props) =>
    props.variant === TypographyVariants.CARD_HEADER_SPECIAL &&
    css`
      font-weight: ${props.theme.weight.bold};
      color: ${props.theme.colors.font.light};
      font-family: ${props.theme.fontFamily.header};
      font-size: ${props.theme.size.font.card_header};

      @media (min-width: ${props.theme.breakpoint.medium + 'px'}) {
        font-size: ${props.theme.size.font.card_header_special};
      }
    `}

    ${(props) =>
    props.variant === TypographyVariants.BODY &&
    css`
      line-height: 2.2rem;
      letter-spacing: 0.2px;

      &:not(:last-of-type) {
        margin-bottom: 3rem;
      }
    `}
`
