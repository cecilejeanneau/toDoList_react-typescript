import React from 'react';
import IToDos from '../models/IToDos';

interface IToDoItemProps {
	onDelete: (task: IToDos) => void;
	task: IToDos
}

/**
 * Display one task
 * @param {IToDoItemProps} props display individually one task by title
 * @return {JSX.Element}
 */
function ToDoItem(props: IToDoItemProps) {
	const {title} = props.task;

	/**
	 * Delete a task
	 * @return {void}
	 */
	function onDelete(): void {
		props.onDelete(props.task);
	}

	return (
		<div>
			<p>{title}</p>
			<button type="button" title="Delete" onClick={onDelete}>X</button>
		</div>
	);
}

export default ToDoItem;
