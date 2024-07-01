import { useState } from "react";
import styled, { css } from "styled-components";
import { AddForm } from "./addForm/AddForm";

export function AddNewTDLForm() {
  const [openForm, setOpenForm] = useState(false);
  return (
    <AddNewTDLFormWrapper
      state={openForm}
      onClick={() => {
        setOpenForm(openForm ? false : true);
        console.log(openForm);
      }}
    >
      <p>+ Add new ToDoList</p>
      <AddForm state={openForm} setState={setOpenForm} />
    </AddNewTDLFormWrapper>
  );
}

const AddNewTDLFormWrapper = styled.div<{ state: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 200px;
  width: 100%;
  min-height: 50px;
  border-radius: 1rem;
  padding: 5px;
  background-color: #efcff9da;
  &:hover {
    background-color: #efcff968;
    cursor: pointer;
  }

  & p:first-child {
    ${(props) =>
      props.state &&
      css`
        display: none;
      `}
  }
`;
