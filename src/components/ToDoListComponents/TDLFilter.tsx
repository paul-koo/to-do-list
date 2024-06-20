import styled from "styled-components";
import { Button } from "../Button";

type TDLFilterPropsType = {
    filter: (filter: string) => void
}

export function TDLFilter(props: TDLFilterPropsType) {
    return (
        <TDLFilterWrapepr>
            <Button title="All" onclick={()=>props.filter("all")}/>
            <Button title="Active" onclick={()=>props.filter("active")}/>
            <Button title="Completed" onclick={()=>props.filter("completed")}/>
        </TDLFilterWrapepr>
    )
}

const TDLFilterWrapepr = styled.div`
    display: flex;
    gap: 15px
`