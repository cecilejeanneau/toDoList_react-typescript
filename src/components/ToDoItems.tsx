import React from 'react';
import IToDos from '../models/IToDos';
import ToDoItem from './ToDoItem';

interface IToDoItemsProps {
	tasks: IToDos[]
}

/**
 * List of tasks updatable
 * @param {IToDoItemsProps} props tasks array from IToDoList
 * @return {JSX.Element} tasks list
 */
function ToDoItems(props: IToDoItemsProps): JSX.Element {
	const tasks = props.tasks;

	const remaining = tasks.filter((t) => !t.done).length;

	return (
		<div>
			<p>Vous avez {remaining} tâches sur {tasks.length} à terminer</p>
			{tasks.map((task) => {
				return <ToDoItem task={task} key={task.id} />;
			})}
		</div>
	);
}

export default ToDoItems;