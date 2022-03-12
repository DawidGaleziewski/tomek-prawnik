import React from 'react'
import { UXContainer } from '../atoms/UXContainer'
import { Typography } from '../atoms/Typography';

import {Image} from "../atoms/Image";
import {css} from '@emotion/react';

const imageBackgroundStyle = css`
    width:100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
`;

export const MainSection = () => (
  <section css={css`
    position: relative;
    min-height: 692px;
  `}>
    <Image css={imageBackgroundStyle} src="temida_grey.svg" alt="temida" />
    <UXContainer zIndex={7}>
      <Typography as="h1">
        Kancelaria Radcy Prawnego <br />
        Tomasz Mikusek
      </Typography>
    </UXContainer>
  </section>
)
