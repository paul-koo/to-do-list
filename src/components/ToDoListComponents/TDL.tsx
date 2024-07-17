import styled from "styled-components";
import { TDLTask } from "./TDLTask";
import { TDLFilter } from "./TDLFilter";
import { TDLAddTaskForm } from "./TDLAddTaskForm";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { defaultTheme } from "../../styles/Theme.styled";
import { Button } from "../Button";
import { TaskType } from "../../layout/main/Main";

export type TDLPropsType = {
  title: string;
  id: string;
  tasks: Array<TaskType>;
  filterStatus: string;
  removeTask: (idTDL: string, idTask: string) => void;
  addTask: (idTDL: string, newTask: string) => void;
  changeStatusTask: (idTDL: string, idTask: string, value: boolean) => void;
  changeFilter: (idTDL: string, filter: string) => void;
  removeTDL: (idTDL: string) => void;
};

export function TDL(props: TDLPropsType) {
  const [listRef] = useAutoAnimate();

  const toDoListTasksList = props.tasks.map((elem) => {
    return (
      <TDLTask
        id={elem.id}
        title={elem.title}
        isDone={elem.isDone}
        removeTask={(idTask) => props.removeTask(props.id, idTask)}
        changeStatusTask={(idTask: string, value: boolean) =>
          props.changeStatusTask(props.id, idTask, value)
        }
      />
    );
  });

  return (
    <TDLWrapper id={props.id}>
      <TDLHeader>
        <h2>{props.title}</h2>
        <Button
          title={"-"}
          onclick={() => props.removeTDL(props.id)}
          styled={{
            width: "20px",
            height: "20px",
            backgroundColor: `${defaultTheme.color.bgColor.main}`,
          }}
        />
      </TDLHeader>
      <TDLAddTaskForm
        addTask={(newTask: string) => props.addTask(props.id, newTask)}
      />
      <ul ref={listRef}>
        {toDoListTasksList.length === 0 ? "No tasks" : toDoListTasksList}
      </ul>
      <TDLFilter
        changeFilter={(filter: string) => props.changeFilter(props.id, filter)}
        filterStatus={props.filterStatus}
      />
    </TDLWrapper>
  );
}

const TDLWrapper = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 270px;
  min-height: 100%;
  background-color: ${defaultTheme.color.bgColor.secondary};
  border-radius: 1rem;
  padding: 15px;
`;

const TDLHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
