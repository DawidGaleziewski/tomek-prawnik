import React from 'react'

import { Typography, TypographyVariants } from '../atoms/Typography';
import styled from '@emotion/styled';
import mainSectionBackground from './images/main-image.jpg'
import { UXContainer } from '../atoms/UXContainer';



export const MainSection = () => (
  <MainSectionBase>
    {/* <Image css={imageBackgroundStyle} src="temida_grey.svg" alt="temida" /> */}
      <UXContainer>
        <Typography as="h1" variant={TypographyVariants.MAIN_HEADER}>
          Kancelaria Radcy Prawnego <br />
          Tomasz Mikusek
        </Typography>
      </UXContainer>      
  </MainSectionBase>
)


const MainSectionBase = styled.section`
    position: relative;
    padding: 30rem 0;
    background-image: url(${mainSectionBackground});
    background-size: cover;
    background-repeat: no-repeat;
`;