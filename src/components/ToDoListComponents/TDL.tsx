import styled from "styled-components";
import { TDLTask } from "./TDLTask";
import { TDLFilter } from "./TDLFilter";
import { TDLTitle } from "./TDLTitle";
import { TDLAddTaskForm } from "./TDLAddTaskForm";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { defaultTheme } from "../../styles/Theme.styled";

export type TDLPropsType = {
  titleToDoList: string;
  id: string;
  tasks: Array<TaskType>;
  filterStatus: string;
  removeTask: (idTDL: string, idTask: string) => void;
  addTask: (idTDL: string, newTask: string) => void;
  changeStatusTask: (idTDL: string, idTask: string, value: boolean) => void;
  changeFilter: (idTDL: string, filter: string) => void;
};

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
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
    <ToDoListWrapper id={props.id}>
      <TDLTitle title={props.titleToDoList} />
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
    </ToDoListWrapper>
  );
}

const ToDoListWrapper = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 270px;
  min-height: 100%;
  background-color: ${defaultTheme.color.bgColor.secondary};
  border-radius: 1rem;
  padding: 15px;
`;
