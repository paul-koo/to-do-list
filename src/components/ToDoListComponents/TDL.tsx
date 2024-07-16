import styled from "styled-components";
import { TDLTask } from "./TDLTask";
import { TDLFilter } from "./TDLFilter";
import { TDLTitle } from "./TDLTitle";
import { TDLAddTaskForm } from "./TDLAddTaskForm";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { defaultTheme } from "../../styles/Theme.styled";

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

  function filterData() {
    let filterData = props.tasks;
    switch (filter) {
      case "active":
        filterData = props.tasks.filter((task) => task.isDone === false);
        break;
      case "completed":
        filterData = props.tasks.filter((task) => task.isDone === true);
    }
    return filterData;
  }

  // if (filter === "active") {
  //   filterData = props.tasks.filter((task) => task.isDone === false);
  // }
  // if (filter === "completed") {
  //   filterData = props.tasks.filter((task) => task.isDone === true);
  // }

  const toDoListTasksList = filterData().map((elem) => {
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
        {toDoListTasksList.length === 0 ? "No tasks" : toDoListTasksList}
      </ul>
      <TDLFilter changeFilter={setFilter} filterStatus={filter} />
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
