import styled from "styled-components";
import { TDL } from "../../components/ToDoListComponents/TDL";
import { useState } from "react";
import { dataToDoLists } from "../../data/dataToDoList";
import { v4 as uuidv4 } from "uuid";
import { AddNewTDLForm } from "./addNewTDLForm/AddNewTDLForm";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export function Main() {
  const [data, setData] = useState(dataToDoLists);

  const [listRef] = useAutoAnimate();

  function removeTask(idTDL: string, idTask: string | number) {
    setData(
      data.map((tdl) => {
        if (tdl.idTDL === idTDL) {
          tdl.tasks = tdl.tasks.filter(
            (task) => String(task.id) !== String(idTask)
          );
        }
        return tdl;
      })
    );
  }

  function addTask(idTDL: string, newTask: string) {
    setData(
      data.map((tdl) => {
        if (tdl.idTDL === idTDL)
          tdl.tasks = [
            { id: uuidv4(), title: newTask, isDone: false },
            ...tdl.tasks,
          ];
        return tdl;
      })
    );
  }

  function changeStatusTask(
    idTDL: string,
    idTask: string | number,
    value: boolean
  ) {
    const newStatus = data.map((tdl) => {
      if (tdl.idTDL === idTDL) {
        tdl.tasks = tdl.tasks.map((task) => {
          if (task.id === idTask) task.isDone = value;
          return task;
        });
      }
      return tdl;
    });
    setData(newStatus);
    console.log(newStatus);
  }

  function addTDL(TDLTitle: string) {
    setData([
      ...data,
      {
        titleToDoList: TDLTitle,
        idTDL: uuidv4(),
        tasks: [],
      },
    ]);
    console.log(data);
  }

  const ToDoLists = data.map((elem) => {
    return (
      <TDL
        idTDL={elem.idTDL}
        titleToDoList={elem.titleToDoList}
        tasks={elem.tasks}
        removeTask={removeTask}
        addTask={addTask}
        changeStatusTask={changeStatusTask}
      />
    );
  });

  return (
    <MainWrapper>
      <Ul ref={listRef}>{ToDoLists}</Ul>
      <AddNewTDLForm addTDL={addTDL} />
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  max-width: 1170px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;
  margin: 0 auto;
  padding: 15px;
  border: 1px solid red;
  flex-grow: 1;
  background-color: rgb(205, 90, 145);
`;
const Ul = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: flex-start;
`;
