import styled from "styled-components"
import { ToDoList } from "../../components/ToDoListComponents/TDL"
import { useState } from "react"
import { dataToDoLists } from "../../data/dataToDoList"




export function Main() {
    const [data, setData] = useState(dataToDoLists)

    function removeTask(idTDL: string ,idTask: number ) {
        setData(data.map((tdl)=>{
            if(tdl.idTDL === idTDL) {
                tdl.tasks = tdl.tasks.filter((task) => task.id != idTask)
            }
            return tdl
        }))
        console.log(idTDL)
        console.log(idTask)
    }

    const ToDoLists = data.map((elem) => {
        return (
            <ToDoList idTDL={elem.idTDL} titleToDoList={elem.titleToDoList} tasks={elem.tasks} removeTask={removeTask}/>
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



