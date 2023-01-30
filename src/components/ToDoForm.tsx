import React, {FormEvent} from 'react';
import {useState} from 'react';
import IToDos from '../models/IToDos';

interface IToDoFormProps {
	onNewTask: (title: string) => void;
	tasks: IToDos[],
	// type of a function (param: type) => the return -- it's a function with another function as param so : function with callback
}

/**
 * Form to update the ToDoList
 * @param {IToDoFormProps} props properties of the components
 * @return {JSX.Element} input in form
 */
function ToDoForm(props: IToDoFormProps): JSX.Element {
	const [taskTitle, setTasktitle] = useState('');

	const tasks = props.tasks;
	const remaining = tasks.filter((t) => !t.done).length;

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
		<form className='m-auto w-fit fixed bottom-10 flex items-center p-2 bg-light-nuance-40/60 rounded-lg border-black border gap-6 absolute z-3'
			onSubmit={sendData}>
			<label htmlFor='task'>
				<input className='w-25 rounded-xl' type="text" placeholder='new task...' onInput={updateField} />
			</label>
			<button className='text-white text-4xl w-10 h-10 rounded-full bg-black' type="submit">+</button>
			<p className='text-black text-3xl font-bold'>{remaining}/{tasks.length}</p>
		</form>
	);
}

export default ToDoForm;
