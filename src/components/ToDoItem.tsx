import React from 'react';
import IToDos from '../models/IToDos';

interface IToDoItemProps {
	onDelete: (task: IToDos) => void;
	onCheckbox: (task: IToDos) => void;
	task: IToDos
}

/**
 * Display one task
 * @param {IToDoItemProps} props display individually one task by title
 * @return {JSX.Element}
 */
function ToDoItem(props: IToDoItemProps) {
	const {title} = props.task;
	const {id} = props.task;
	const {done} = props.task;

	/**
	 * Delete a task
	 * @return {void}
	 */
	function onDelete(): void {
		props.onDelete(props.task);
	}

	/**
	 * Change state of a task
	 * @param {React.ChangeEvent<HTMLInputElement>} event change state
	 * @return {void}
	 */
	function onCheck(event: React.ChangeEvent<HTMLInputElement>): void {
		props.onCheckbox({
			id,
			title,
			done: event.currentTarget.checked,
		});
	}

	return (
		<label htmlFor={id}>
			<input type="checkbox" id={id} defaultChecked={done} onChange={onCheck}/>
			<p>{title}</p>
			<button type="button" title="Delete" onClick={onDelete}>X</button>
		</label>
	);
}

export default ToDoItem;
