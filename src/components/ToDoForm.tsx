import React, {FormEvent} from 'react';
import {useState} from 'react';

interface IToDoFormProps {
	onNewTask: (title: string) => void
	// type of a function (param: type) => the return -- it's a function with another function as param so : function with callback
}

/**
 * Form to update the ToDoList
 * @param {IToDoFormProps} props properties of the components
 * @return {JSX.Element} input in form
 */
function ToDoForm(props: IToDoFormProps) {
	const [taskTitle, setTasktitle] = useState('');

	/**
	 * Retrieve the value of the input and update the state with set
	 * @param {FormEvent<HTMLInputElement>} event input a new task
	 */
	function updateField(event: FormEvent<HTMLInputElement>) {
		// type of event with imbrication of HTMLInputElement type in FormEvent type

		setTasktitle(event.currentTarget.value);
	}
	/**
	 * handle conflict with submit
	 * @param {FormEvent<HTMLFormElement>} event submit
	 */
	function sendData(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		props.onNewTask(taskTitle);
	}
	return (
		<form onSubmit={sendData}>
			<label htmlFor="">
				<input type="text" placeholder='nom de la tâche' onInput={updateField} />
			</label>
			<button type="submit">Ajouter une tâche</button>
		</form>
	);
}

export default ToDoForm;
