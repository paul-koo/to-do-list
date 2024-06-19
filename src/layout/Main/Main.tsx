import styled from "styled-components"
import { ToDoList, dataToDoListType } from "../../components/ToDoListComponents/ToDoList"


type MainPropsType = {
    dataToDoLists: Array<dataToDoListType>
}



export function Main(props: MainPropsType) {
    const ToDoLists = props.dataToDoLists.map((elem: dataToDoListType) => {
        return (
            <ToDoList titleToDoList={elem.titleToDoList} tasks={elem.tasks}/>
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



