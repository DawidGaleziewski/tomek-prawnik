import React, { ChangeEvent } from "react";
import { css } from "@emotion/react";
import styled from '@emotion/styled';

interface IInputSliderProps {
    id: string;
    type: "text" | "email",
    name: string,
    labelText: string,
    value: string,
    onChange: (event: ChangeEvent) => void;
}

export const InputSlider = ({ id, type, name, labelText, value, onChange }: IInputSliderProps) => {
  return (
    <InputBase className="input-slider-wrapper">
      <input
        onChange={onChange}
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder=" "
      />
      <label htmlFor={id}>
        {labelText}
      </label>
    </InputBase>
  );
};

// const inputWrapperStyle = css`
//   width: 100%;
//   position: relative;
//   display: block;
// `;


// const inputStyle = css`
//   width: 100%;
//   padding: 0.8rem;
//   border: none;
//   border-bottom: 1px solid #92a2ae;
//   outline: none;
//   display: block;
//   &:focus {
//     border-bottom: 1px solid #5a95e6;
//   }
// `;

// const labelStyle = css`
//     position: absolute;
//     left: 0.8rem;
//     top: 50%;
//     font-size: 1.6rem;
//     color: #92a2ae;
//     transform: translate(-10%, -170%) scale(0.8);
//     input:placeholder-shown + & {
//       transform: translate(0, -50%);
//     }
//     input:-webkit-autofill + & {
//       transform: translate(-10%, -170%) scale(0.8);
//     }
//     transition: all ease-in 0.3s;
//     pointer-events: none;
//   `;

const InputBase = styled.div`
  width: 100%;
  position: relative;
  display: block;

  & input {
    width: 100%;
    padding: ${props => props.theme.padding.input.desktop};
    border-radius: ${props => props.theme.radius.input};
    border: none;
    border-bottom: ${props => props.theme.border.input.default};
    outline: none;
    display: block;
    
    &:focus {
        border-bottom: ${props => props.theme.colors.primary};
    }
  }

  & label {
    position: absolute;
    left: 2.1rem;
    top: 50%;
    font-size: ${props => props.theme.size.font.input};
    color: ${props => props.theme.colors.font.input_label};
    transform: translate(-10%, -170%) scale(0.8);

    transition: ${props => props.theme.transition.input_focus};
    pointer-events: none;
  }

  input:placeholder-shown + label {
      transform: translate(0, -50%);
  }

  input:-webkit-autofill + label {
      transform: translate(-10%, -170%) scale(0.8);
  }
`;