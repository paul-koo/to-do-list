import styled from "styled-components";
import { TDL } from "../../components/ToDoListComponents/TDL";
import { useState } from "react";
import { dataToDoLists } from "../../data/dataToDoList";
import { v4 as uuidv4 } from "uuid";

export function Main() {
  const [data, setData] = useState(dataToDoLists);

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
    // const newData = [...data];
    // newData.map((elem) =>
    //   elem.idTDL === idTDL
    //     ? (elem.tasks = [
    //         { id: uuidv4(), title: "newTask", isDone: false },
    //         ...elem.tasks,
    //       ])
    //     : elem
    // );
    // setData(newData);
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

  const ToDoLists = data.map((elem) => {
    return (
      <TDL
        idTDL={elem.idTDL}
        titleToDoList={elem.titleToDoList}
        tasks={elem.tasks}
        removeTask={removeTask}
        addTask={addTask}
      />
    );
  });

  return (
    <MainWrapper>
      <Ul>{ToDoLists}</Ul>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
  padding: 15px;
  border: 1px solid red;
  flex-grow: 1;
`;
const Ul = styled.ul`
  display: flex;
  gap: 20px;
`;
