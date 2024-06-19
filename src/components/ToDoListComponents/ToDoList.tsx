import styled from "styled-components"
import { ToDoListTitle } from "./ToDoListTitle"
import { ToDoListAddTaskForm } from "./ToDoListAddTaskForm"

import { ToDoListButtons } from "./ToDoListButtons"
import { TaskType, ToDoListTask } from "./ToDoListTask"


export type dataToDoListType = {
    titleToDoList: string
    tasks: Array<TaskType>
}


export function ToDoList(props: dataToDoListType) {
    const toDoListTasksList = props.tasks.map(elem => {
        return (
            <ToDoListTask id={elem.id} title={elem.title} isDone={elem.isDone}/>
        )
    })

    return (
        <ToDoListWrapper>
            <ToDoListTitle title={props.titleToDoList}/>
            <ToDoListAddTaskForm/>
            <ul>
                {toDoListTasksList}
            </ul>   
            <ToDoListButtons/>
        </ToDoListWrapper>
    )
}

const ToDoListWrapper = styled.li`
    min-width: 200px;
    max-width: 350px;
    min-height: 150px;
    background-color: #ccff8ee9;
    border-radius: 1rem;
    padding: 15px;
`