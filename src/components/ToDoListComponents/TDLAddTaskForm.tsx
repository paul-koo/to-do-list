import styled from "styled-components";
import { Button } from "../Button";
import { ChangeEvent, useState } from "react";
import { Input } from "../Input";

type TDLAddTaskFormPropsType = {
  addTask: (newTask: string) => void;
};
export function TDLAddTaskForm(props: TDLAddTaskFormPropsType) {
  const [input, setInput] = useState("");

  const onClickButtonHandler = () => {
    props.addTask(input);
    setInput("");
  };

  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);
  };

  return (
    <TDLAddTaskFormWrapper>
      <Input value={input} type={"text"} callback={onChangeInputHandler} />
      <Button title="+" onclick={onClickButtonHandler} />
    </TDLAddTaskFormWrapper>
  );
}

const TDLAddTaskFormWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
