import { useState } from "react";
import styled, { css } from "styled-components";
import { AddForm } from "./addForm/AddForm";

type AddNewTDLFormType = {
  addTDL: (TDLTitle: string) => void;
};

export function AddNewTDLForm(props: AddNewTDLFormType) {
  const [openForm, setOpenForm] = useState(false);
  return (
    <AddNewTDLFormWrapper>
      <Title
        state={openForm}
        onClick={() => {
          setOpenForm(true);
          console.log(openForm);
        }}
      >
        <p>+ Add new ToDoList</p>
      </Title>
      <AddForm
        state={openForm}
        setOpenState={setOpenForm}
        addTDL={props.addTDL}
      />
    </AddNewTDLFormWrapper>
  );
}

const AddNewTDLFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 200px;
  width: 100%;
  min-height: 50px;
  border-radius: 1rem;
  background-color: #efcff9da;
  &:hover {
    background-color: #efcff968;
    cursor: pointer;
  }
`;

const Title = styled.div<{ state: boolean }>`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.state &&
    css`
      display: none;
    `}
`;
