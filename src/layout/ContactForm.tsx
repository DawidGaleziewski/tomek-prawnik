import React, { FunctionComponent, Fragment } from 'react';
import { css } from '@emotion/react';

import { Button, ButtonVariants } from '../atoms/Button';
import { InputSlider } from '../atoms/Input';
import { Textarea } from '../atoms/Textarea';



const formWrapper = css`
      max-width: 60rem;
      margin: 0 auto;
    `;

const twoColumnInput = css`
        display: flex;
        justify-content: space-between;

        & .input-slider-wrapper {
          width: calc(50% - 3rem);
          margin-bottom: 2rem;
        }
      `;

export const ContactForm = () => (
  <form css={formWrapper}>
    <div css={twoColumnInput}>
      <InputSlider
        id="name"
        labelText="Imię"
        type="text"
        name="name"
        onChange={() => null}
      />
      <InputSlider
        id="email"
        labelText="Email"
        type="email"
        name="email"
        onChange={() => null}
      />
    </div>
    <Textarea
      css={css`
        margin-bottom: 4rem;
      `}
      rows={7}
    ></Textarea>

    <Button variant={ButtonVariants.SEND_FORM}>Wyślij</Button>
  </form>
)
