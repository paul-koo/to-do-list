import styled from "styled-components"
import { ToDoList, dataToDoListType } from "../../components/ToDoListComponents/TDL"
import { useState } from "react"
import { dataToDoLists } from "../../data/dataToDoList"




export function Main() {
    const [data, setData] = useState(dataToDoLists)

    const ToDoLists = data.map((elem: dataToDoListType) => {
        return (
            <ToDoList id={elem.id} titleToDoList={elem.titleToDoList} tasks={elem.tasks}/>
        )
    })

    return (
        <MainWrapper>
            <Ul>
                {ToDoLists}
            </Ul>
        </MainWrapper>
    )
}

const MainWrapper = styled.main`
    max-width: 1170px;
    width: 100%;
    margin: 0 auto;
    padding: 15px;
    border: 1px solid red;
    flex-grow: 1;
`
const Ul = styled.ul`
    display: flex;
    gap: 20px
`



