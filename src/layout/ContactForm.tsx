import React, { ChangeEvent, useReducer } from 'react'
import { css } from '@emotion/react'
import axios from 'axios';

import { Button, ButtonVariants } from '../atoms/Button'
import { InputSlider } from '../atoms/Input'
import { Textarea } from '../atoms/Textarea'

const formWrapper = css`
  max-width: 60rem;
  margin: 0 auto;
`

const twoColumnInput = css`
  display: flex;
  justify-content: space-between;

  & .input-slider-wrapper {
    width: calc(50% - 3rem);
    margin-bottom: 2rem;
  }
`

enum ActionTypes {
  PENDING = 'pending',
  UPDATE = 'update',
  DONE = 'done',
  FAILED = 'failed'
}

type IFormAction = { type: ActionTypes.UPDATE; payload: {name: string, value: string} } | {type: ActionTypes.PENDING} |  {type: ActionTypes.DONE} | {type: ActionTypes.FAILED}

enum NetworkStatus  {
    SUCCESS,
    ERROR,
    DEFAULT,
    LOADING
}

interface IFormState {
    status: NetworkStatus,
    values: {
        [name: string]: string,
    }
}

const formReducer = (state: IFormState, action: IFormAction) => {
  switch (action.type) {
    case ActionTypes.UPDATE: {
      return {
          ...state,
          values: {
              ...state.values,
              [action.payload.name]: action.payload.value
          }
      }
    }

    case ActionTypes.PENDING: {
        return {
            ...state,
            status: NetworkStatus.LOADING
        }
    }

    case ActionTypes.DONE: {
        return {
            ...state,
            status: NetworkStatus.SUCCESS
        }
    }

    case ActionTypes.FAILED: {
        return {
            ...state,
            status: NetworkStatus.ERROR
        }
    }

    default: {
      return state
    }
  }
};

const initialState = {
    values: {},
    status: NetworkStatus.DEFAULT
};

export const ContactForm = () => {
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);
  const isFormPending = formState.status === NetworkStatus.LOADING;

  console.log('form state', formState, formState.status === NetworkStatus.LOADING);

  const onInputChange = (event:ChangeEvent) => dispatchFormState({type: ActionTypes.UPDATE, payload:{ value: event.target.value, name: event.target.name}});

  const onFormSubmit = async (event:ChangeEvent) => {
      event.preventDefault();

      try {
        dispatchFormState({type: ActionTypes.PENDING});
        const response = await axios.post('https://formspree.io/f/xvolqqjq', {data:{...formState.values}});
        dispatchFormState({type: ActionTypes.DONE});

      } catch {
          console.log('error sensing email');
          dispatchFormState({type: ActionTypes.FAILED});
      }
      

      console.log('sending data', formState.values)
  }

  return (
    <form onSubmit={onFormSubmit} css={formWrapper}>
      <div css={twoColumnInput}>
        <InputSlider
          id="name"
          labelText="Imię"
          type="text"
          name="name"
          onChange={onInputChange}
        />
        <InputSlider
          id="email"
          labelText="Email"
          type="email"
          name="email"
          onChange={onInputChange}
        />
      </div>
      <Textarea
        name="msg"
        onChange={onInputChange}
        css={css`
          margin-bottom: 4rem;
        `}
        rows={7}
      ></Textarea>

      <Button disabled={isFormPending} variant={ButtonVariants.SEND_FORM}>{isFormPending ? 'Czekaj' : 'Wyślij'}</Button>
    </form>
  )
}
