import IToDos from './IToDos';

interface ITodoList {
    username: string,
    title: string,
    tasks: IToDos[] // task type interface IToDos in array []
}

export default ITodoList;
