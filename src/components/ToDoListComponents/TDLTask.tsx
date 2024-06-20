import styled from "styled-components"
import { Button } from "../Button"

export type TDLTaskPropsType = {
    id: number
    title: string
    isDone: boolean
    idTDL: string
    removeTask: (idTask: number)=>void
}

export function TDLTask(props: TDLTaskPropsType) {
    return (
        <Li>
            <Label><input type="checkbox" checked={props.isDone}/>{props.title}</Label>
            <Button title={"-"} onclick={()=>props.removeTask(props.id)}/>
        </Li>
    )
}

const Label = styled.label`
    display: flex;
    gap: 10px;
`

const Li = styled.li`
    display: flex;
    gap: 10px;
`