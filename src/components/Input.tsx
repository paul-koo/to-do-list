import { ChangeEvent, KeyboardEvent } from "react";

type InputPropsType = {
  type: string;
  value?: string;
  checked?: boolean;
  callback: (event: ChangeEvent<HTMLInputElement>) => void;
  callbackOnKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
};

export function Input(props: InputPropsType) {
  return (
    <input
      type={props.type}
      value={props.value}
      checked={props.checked}
      onChange={props.callback}
      onKeyUp={props.callbackOnKeyUp}
    ></input>
  );
}
