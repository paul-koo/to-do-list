import styled from "styled-components";
import { TDLTask } from "./TDLTask";
import { TDLFilter } from "./TDLFilter";
import { TDLTitle } from "./TDLTitle";
import { TDLAddTaskForm } from "./TDLAddTaskForm";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export type TDLPropsType = {
  titleToDoList: string;
  idTDL: string;
  tasks: Array<TaskType>;
  removeTask: (idTDL: string, idTask: number | string) => void;
  addTask: (idTDL: string, newTask: string) => void;
  changeStatusTask: (
    idTDL: string,
    idTask: string | number,
    value: boolean
  ) => void;
};

export type TaskType = {
  id: number | string;
  title: string;
  isDone: boolean;
};

export function TDL(props: TDLPropsType) {
  const [listRef] = useAutoAnimate();

  let [filter, setFilter] = useState("all");

  let filterData = props.tasks;

  if (filter === "active") {
    filterData = props.tasks.filter((task) => task.isDone === false);
  }
  if (filter === "completed") {
    filterData = props.tasks.filter((task) => task.isDone === true);
  }

  const toDoListTasksList = filterData.map((elem) => {
    return (
      <TDLTask
        id={elem.id}
        title={elem.title}
        isDone={elem.isDone}
        removeTask={(idTask) => props.removeTask(props.idTDL, idTask)}
        changeStatusTask={(idTask: string | number, value: boolean) =>
          props.changeStatusTask(props.idTDL, idTask, value)
        }
      />
    );
  });

  return (
    <ToDoListWrapper id={props.idTDL}>
      <TDLTitle title={props.titleToDoList} />
      <TDLAddTaskForm
        addTask={(newTask: string) => props.addTask(props.idTDL, newTask)}
      />
      <ul ref={listRef}>
        {toDoListTasksList.length === 0 ? "Тасок нет" : toDoListTasksList}
      </ul>
      <TDLFilter filter={setFilter} />
    </ToDoListWrapper>
  );
}

const ToDoListWrapper = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 200px;
  max-width: 350px;
  min-height: 150px;
  background-color: #f1f2f4;
  border-radius: 1rem;
  padding: 15px;
`;
