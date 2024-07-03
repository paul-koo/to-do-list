import styled from "styled-components";
import { Button } from "../Button";
import { Input } from "../Input";
import { ChangeEvent } from "react";

export type TDLTaskPropsType = {
  id: number | string;
  title: string;
  isDone: boolean;
  removeTask: (idTask: number | string) => void;
  changeStatusTask: (idTask: string | number, value: boolean) => void;
};

export function TDLTask(props: TDLTaskPropsType) {
  // const [status, setStatus] = useState(props.isDone);

  return (
    <Li>
      <Label>
        <Input
          type={"checkbox"}
          checked={props.isDone}
          callback={(event: ChangeEvent<HTMLInputElement>) => {
            // setStatus(event.currentTarget.checked);
            props.changeStatusTask(props.id, event.currentTarget.checked);
          }}
        />
      </Label>
      <p>{props.title}</p>
      <Button title={"-"} onclick={() => props.removeTask(props.id)} />
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
    width: 100%;
  }
`;
