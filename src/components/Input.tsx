import { ChangeEvent } from "react";

type InputPropsType = {
  type: string;
  value: string;
  callback: (event: ChangeEvent<HTMLInputElement>) => void;
};

export function Input(props: InputPropsType) {
  return <input value={props.value} onChange={props.callback}></input>;
}
