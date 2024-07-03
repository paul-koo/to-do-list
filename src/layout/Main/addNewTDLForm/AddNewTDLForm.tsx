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
        }}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.5 2.5C27.5 1.1193 26.3807 0 25 0C23.6193 0 22.5 1.1193 22.5 2.5V22.5H2.5C1.1193 22.5 0 23.6193 0 25C0 26.3807 1.1193 27.5 2.5 27.5H22.5V47.5C22.5 48.8807 23.6193 50 25 50C26.3807 50 27.5 48.8807 27.5 47.5V27.5H47.5C48.8807 27.5 50 26.3807 50 25C50 23.6193 48.8807 22.5 47.5 22.5H27.5V2.5Z"
            fill="#ffffff"
          />
        </svg>

        <p>Add new ToDoList</p>
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
  min-width: 270px;

  min-height: 50px;
  border-radius: 1rem;
  background-color: #ffffff3d;
  color: #ffffff;
  &:hover {
    background-color: #a6c5e229;
    cursor: pointer;
  }
`;

const Title = styled.div<{ state: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  & p {
    margin-left: 8px;
  }
  ${(props) =>
    props.state &&
    css`
      display: none;
    `}
`;
