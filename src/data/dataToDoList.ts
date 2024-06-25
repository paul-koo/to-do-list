import { TaskType } from "../components/ToDoListComponents/TDL";

type DataToDoListsType = {
    titleToDoList: string;
    idTDL: string;
    tasks: Array<TaskType>;}[]

export const dataToDoLists: DataToDoListsType = [
    {
        titleToDoList: "What to learn",
        idTDL: "What to learn",
        tasks: [
            { id: 1, title: 'HTML&CSS', isDone: false },
            { id: 2, title: 'JS', isDone: false },
            { id: 3, title: 'ReactJS', isDone: false },
            { id: 4, title: 'Redux', isDone: false },
        ],
    },
    

    {
        titleToDoList: "What to reed",
        idTDL: "What to reed",
        tasks: [
            { id: 1, title: 'HTML&CSS', isDone: false },
            { id: 2, title: 'JS', isDone: false },
            { id: 3, title: 'ReactJS', isDone: false },
            { id: 4, title: 'Redux', isDone: false },
        ],
    }
]
