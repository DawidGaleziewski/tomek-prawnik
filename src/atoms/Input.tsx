import React from "react";
import { css } from "@emotion/react";

const inputWrapperStyle = css`
  width: 100%;
  position: relative;
  display: block;
`;

const inputStyle = css`
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-bottom: 1px solid #92a2ae;
  outline: none;
  display: block;
  &:focus {
    border-bottom: 1px solid #5a95e6;
  }
`;

const labelStyle = css`
    position: absolute;
    left: 0.8rem;
    top: 50%;
    font-size: 1.6rem;
    color: #92a2ae;
    transform: translate(-10%, -170%) scale(0.8);
    input:placeholder-shown + & {
      transform: translate(0, -50%);
    }
    input:-webkit-autofill + & {
      transform: translate(-10%, -170%) scale(0.8);
    }
    transition: all ease-in 0.3s;
    pointer-events: none;
  `;

interface IInputSliderProps {
    id: string;
    type: "text" | "email",
    name: string,
    labelText: string,
    value: string,
    onChange: () => void;
}

export const InputSlider = ({ id, type, name, labelText, value, onChange }: IInputSliderProps) => {
  return (
    <div className="input-slider-wrapper" css={inputWrapperStyle}>
      <input
        onChange={onChange}
        css={inputStyle}
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder=" "
      />
      <label css={labelStyle} htmlFor={id}>
        {labelText}
      </label>
    </div>
  );
};