import { dataToDoListType } from "../components/ToDoListComponents/TDL";


export const dataToDoLists: Array<dataToDoListType> = [
    {
        titleToDoList: "What to learn",
        id: "What to learn",
        tasks: [
            { id: 1, title: 'HTML&CSS', isDone: true },
            { id: 2, title: 'JS', isDone: true },
            { id: 3, title: 'ReactJS', isDone: false },
            { id: 4, title: 'Redux', isDone: false },
        ],
    },
    

    {
        titleToDoList: "What to reed",
        id: "What to reed",
        tasks: [
            { id: 1, title: 'HTML&CSS', isDone: true },
            { id: 2, title: 'JS', isDone: true },
            { id: 3, title: 'ReactJS', isDone: false },
            { id: 4, title: 'Redux', isDone: false },
        ],
    }
]
