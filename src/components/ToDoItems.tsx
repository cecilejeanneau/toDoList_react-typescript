import React from 'react';
import IToDos from '../models/IToDos';
import ToDoItem from './ToDoItem';

interface IToDoItemsProps {
	onDelete: (task: IToDos) => void;
	onCheckbox: (task: IToDos) => void;
	tasks: IToDos[]
}

/**
 * List of tasks updatable
 * @param {IToDoItemsProps} props tasks array from IToDoList
 * @return {JSX.Element} tasks list
 */
function ToDoItems(props: IToDoItemsProps): JSX.Element {
	const tasks = props.tasks;

	// const remaining = tasks.filter((t) => !t.done).length;

	return (
		<div className='flex flex-col'>
			{tasks.map((task) => {
				return <ToDoItem onCheckbox={props.onCheckbox} task={task} key={task.id} onDelete={props.onDelete} />;
			})}
			{/* <p className='self-end text-white'>{remaining} / {tasks.length}</p> */}
		</div>
	);
}

export default ToDoItems;
