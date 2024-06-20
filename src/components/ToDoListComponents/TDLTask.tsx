import styled from "styled-components"

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export function ToDoListTask(props: TaskType) {
    return (
        <li>
            <Label>{props.title}<input type="checkbox" required={props.isDone}/></Label>
        </li>
    )
}

const Label = styled.label`
    display: flex;
    gap: 10px;
`