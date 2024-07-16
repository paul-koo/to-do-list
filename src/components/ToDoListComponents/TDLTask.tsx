import styled from "styled-components";
import { Button } from "../Button";
import { Input } from "../Input";
import { ChangeEvent } from "react";
import { defaultTheme } from "../../styles/Theme.styled";

export type TDLTaskPropsType = {
  id: number | string;
  title: string;
  isDone: boolean;
  removeTask: (idTask: number | string) => void;
  changeStatusTask: (idTask: string | number, value: boolean) => void;
};

export function TDLTask(props: TDLTaskPropsType) {
  return (
    <Li>
      <Label>
        <Input
          type={"checkbox"}
          checked={props.isDone}
          callback={(event: ChangeEvent<HTMLInputElement>) => {
            props.changeStatusTask(props.id, event.currentTarget.checked);
          }}
        />
      </Label>
      <p>{props.title}</p>
      <Button
        title={"-"}
        onclick={() => props.removeTask(props.id)}
        styled={{
          width: "20px",
          height: "20px",
          backgroundColor: `${defaultTheme.color.bgColor.main}`,
        }}
      />
    </Li>
  );
}

const Label = styled.label`
  display: flex;
  gap: 10px;
`;

const Li = styled.li`
  display: flex;
  gap: 10px;
  & p {
    display: inline-block;
    flex-grow: 1;
  }
`;
