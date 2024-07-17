import styled from "styled-components";
import { TDL } from "../../components/ToDoListComponents/TDL";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AddNewTDLForm } from "./addNewTDLForm/AddNewTDLForm";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { defaultTheme } from "../../styles/Theme.styled";

export function Main() {
  let idTodolist1 = uuidv4();
  let idTodolist2 = uuidv4();

  const [data, setData] = useState([
    { id: idTodolist1, title: "What to reed", filter: "all" },
    { id: idTodolist2, title: "What to write", filter: "all" },
  ]);

  const [tasks, setTasks] = useState({
    [idTodolist1]: [
      { id: uuidv4(), title: "HTML&CSS", isDone: false },
      { id: uuidv4(), title: "JS", isDone: false },
      { id: uuidv4(), title: "ReactJS", isDone: false },
      { id: uuidv4(), title: "Redux", isDone: false },
    ],
    [idTodolist2]: [
      { id: uuidv4(), title: "Styled", isDone: false },
      { id: uuidv4(), title: "JS", isDone: false },
      { id: uuidv4(), title: "ReactJS", isDone: false },
      { id: uuidv4(), title: "Node", isDone: false },
    ],
  });

  const [listRef] = useAutoAnimate();

  function removeTask(idTDL: string, idTask: string) {
    setTasks({
      ...tasks,
      idTDL: tasks[idTDL].filter((task) => idTask !== task.id),
    });
  }

  function addTask(idTDL: string, newTask: string) {
    const task = { id: uuidv4(), title: newTask, isDone: false };
    setTasks({ ...tasks, [idTDL]: [...tasks[idTDL], task] });
  }

  function changeStatusTask(
    idTDL: string,
    idTask: string | number,
    value: boolean
  ) {
    setTasks({
      ...tasks,
      [idTDL]: tasks[idTDL].map((task) =>
        task.id === idTask ? { ...task, isDone: value } : task
      ),
    });
  }

  function addTDL(TDLTitle: string) {
    // setData([
    //   ...data,
    //   {
    //     titleToDoList: TDLTitle,
    //     idTDL: uuidv4(),
    //     tasks: [],
    //   },
    // ]);
    // console.log(data);
  }

  function changeFilter(idTDL: string, filter: string) {
    setData(
      data.map((tdl) => (tdl.id === idTDL ? { ...tdl, filter: filter } : tdl))
    );
  }

  const ToDoLists = data.map((tdl) => {
    let filtredTask = tasks[tdl.id];
    if (tdl.filter === "active")
      filtredTask = filtredTask.filter((task) => !task.isDone);
    if (tdl.filter === "completed")
      filtredTask = filtredTask.filter((task) => task.isDone);

    return (
      <TDL
        id={tdl.id}
        title={tdl.title}
        tasks={filtredTask}
        filterStatus={tdl.filter}
        removeTask={removeTask}
        addTask={addTask}
        changeStatusTask={changeStatusTask}
        changeFilter={changeFilter}
      />
    );
  });

  return (
    <MainWrapper>
      <Ul ref={listRef}>
        {ToDoLists}
        <AddNewTDLForm addTDL={addTDL} />
      </Ul>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  max-width: 1170px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin: 0 auto;
  padding: 15px;
  border: 1px solid red;
  flex-grow: 1;
  background-color: ${defaultTheme.color.bgColor.main};
`;
const Ul = styled.ul`
  display: flex;
  gap: 19px;
  flex-wrap: wrap;
  align-items: flex-start;
`;
