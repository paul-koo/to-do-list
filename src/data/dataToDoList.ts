import { TaskType } from "../components/ToDoListComponents/TDL";
import { v4 as uuidv4 } from "uuid";

type DataToDoListsType = {
    titleToDoList: string;
    idTDL: string;
    tasks: Array<TaskType>;}[]

export const dataToDoLists: DataToDoListsType = [
    
    {
        titleToDoList: "What to reed",
        idTDL: uuidv4(),
        tasks: [
            { id: uuidv4(), title: 'HTML&CSS', isDone: false },
            { id: uuidv4(), title: 'JS', isDone: false },
            { id: uuidv4(), title: 'ReactJS', isDone: false },
            { id: uuidv4(), title: 'Redux', isDone: false },
        ],
    }
]
