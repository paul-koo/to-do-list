import styled, { css } from "styled-components";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { ChangeEvent, KeyboardEvent, useState } from "react";

type AddFormPropsType = {
  state: boolean;
  setOpenState: (state: boolean) => void;
  addTDL: (TDLTitle: string) => void;
};
export function AddForm(props: AddFormPropsType) {
  const [inputCorrect, setInputCorrect] = useState(true);
  const [inputState, setInputState] = useState("");
  const InputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputState(event.currentTarget.value);
    console.log(inputState);
  };

  const addBtnOnClickHandler = () => {
    if (inputState.trim()) {
      props.addTDL(inputState);
      props.setOpenState(props.state ? false : true);
    } else {
      setInputCorrect(false);
    }
    setInputState("");
  };

  const addBtnOnKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addBtnOnClickHandler();
    }
  };

  return (
    <AddFormWrapper state={props.state}>
      <Input
        value={inputState}
        type={"text"}
        callback={InputHandler}
        placeholder={inputCorrect ? "" : "Error"}
        callbackOnKeyUp={addBtnOnKeyUpHandler}
      ></Input>
      <ControlPanel>
        <Button
          title="Add"
          onclick={addBtnOnClickHandler}
          width="50px"
          backgroundColor="#0477dc"
          color="white"
        />
        <Button
          title="X"
          onclick={() => props.setOpenState(props.state ? false : true)}
        />
      </ControlPanel>
    </AddFormWrapper>
  );
}

const AddFormWrapper = styled.div<{ state: boolean }>`
  padding: 5px;
  display: none;
  ${(props) =>
    props.state &&
    css`
      display: flex;
    `}
  flex-direction: column;
  gap: 5px;
`;
const ControlPanel = styled.div`
  display: flex;
  gap: 10px;
`;
