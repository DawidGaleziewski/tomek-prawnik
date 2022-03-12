import React from 'react'
import { UXContainer } from '../atoms/UXContainer'
import { Typography, TypographyVariants } from '../atoms/Typography';

import {Image} from "../atoms/Image";
import {css} from '@emotion/react';


const imageBackgroundStyle = css`
    width:100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
`;

const headerContainer = css`
  position: absolute;
  top: 50%;
  z-index: 7;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const MainSection = () => (
  <section css={css`
    position: relative;
    min-height: 60rem;
  `}>
    <Image css={imageBackgroundStyle} src="temida_grey.svg" alt="temida" />
      <div css={headerContainer}>
        <Typography as="h1" variant={TypographyVariants.MAIN_HEADER}>
          Kancelaria Radcy Prawnego <br />
          Tomasz Mikusek
        </Typography>
      </div>
  </section>
)
