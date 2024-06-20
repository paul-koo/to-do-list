import styled from "styled-components"

type ButtonPropsType = {
    title: string
    onclick?: ()=>void
}

export function Button(props: ButtonPropsType) {
    return (
        <Btn onClick={props.onclick}>
            {props.title}
        </Btn>
    )
}

const Btn = styled.button`
    min-width: 20px;
    min-height: 20px;
    border-radius: 0.3rem;
    background-color: #e48cf578;
`