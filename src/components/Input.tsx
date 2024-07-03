import { ChangeEvent, KeyboardEvent } from "react";
import styled from "styled-components";

type InputPropsType = {
  type: string;
  value?: string;
  checked?: boolean;
  callback: (event: ChangeEvent<HTMLInputElement>) => void;
  callbackOnKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  width?: string;
};

export function Input(props: InputPropsType) {
  return (
    <InputStyled
      type={props.type}
      value={props.value}
      checked={props.checked}
      onChange={props.callback}
      onKeyUp={props.callbackOnKeyUp}
      width={props.width}
    ></InputStyled>
  );
}

const InputStyled = styled.input<{ width?: string }>`
  width: ${(props) => props.width};
`;
