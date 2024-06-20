import styled from "styled-components"
import { Button } from "../Button"

export function TDLAddTaskForm() {
    return (
        <TDLAddTaskFormWrapper>
            <input type="text"></input>
            <Button title="+"/>
        </TDLAddTaskFormWrapper>
    )
}

const TDLAddTaskFormWrapper = styled.div`
    display: flex;
    gap: 10px
`