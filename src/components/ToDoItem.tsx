import React from 'react';
import IToDos from '../models/IToDos';

interface IToDoItemProps {
	task: IToDos
}

/**
 * Display one task
 * @param {IToDoItemProps} props display individually one task by title
 * @return {JSX.Element}
 */
function ToDoItem(props: IToDoItemProps) {
	const {title} = props.task;

	return (
		<p>{title}</p>
	);
}

export default ToDoItem;
