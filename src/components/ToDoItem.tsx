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
function ToDoItem(props: IToDoItemProps): JSX.Element {
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
		<label className='flex items-center gap-3 p-2' htmlFor={id}>
			<input
				className='w-10 h-10 rounded-full bg-dark-color-60 checked:bg-color-state-success checked:line-through'
				type="checkbox" id={id} defaultChecked={done} onChange={onCheck}/>
			<p className={`text-2xl font-semibold ${props.task.done ? 'line-through' : ''}`}>{title}</p>
			<button className='text-xl' type="button" title="Delete" onClick={onDelete}>💩</button>
		</label>
	);
}

export default ToDoItem;
