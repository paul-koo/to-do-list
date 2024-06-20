import styled from "styled-components";
import { Button } from "../Button";

export function TDLFilter() {
    return (
        <TDLFilterWrapepr>
            <Button title="All"/>
            <Button title="Active"/>
            <Button title="Completed"/>
        </TDLFilterWrapepr>
    )
}

const TDLFilterWrapepr = styled.div`
    display: flex;
    gap: 15px
`