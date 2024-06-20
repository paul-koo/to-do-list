import styled from "styled-components"
import { TDLTask } from "./TDLTask"
import { TDLFilter } from "./TDLFilter"
import { TDLTitle } from "./TDLTitle"
import { TDLAddTaskForm } from "./TDLAddTaskForm"


export type dataToDoListType = {
    titleToDoList: string
    idTDL: string
    tasks: Array<TaskType>
    removeTask: (idTDL: string, idTask: number)=>void
}

type TaskType = {
    id: number
    title: string
    isDone: boolean
}




export function ToDoList(props: dataToDoListType) {
    const toDoListTasksList = props.tasks.map(elem => {
        return (
            <TDLTask idTDL={props.idTDL} id={elem.id} title={elem.title} isDone={elem.isDone} removeTask={(idTask) => props.removeTask(props.idTDL, idTask)}/>
        )
    })

    return (
        <ToDoListWrapper id={props.idTDL}>
            <TDLTitle title={props.titleToDoList}/>
            <TDLAddTaskForm/>
            <ul>
                {toDoListTasksList}
            </ul>   
            <TDLFilter/>
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