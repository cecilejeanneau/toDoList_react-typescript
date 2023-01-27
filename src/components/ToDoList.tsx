import React from 'react';
import ToDoItems from './ToDoItems';
import {useState} from 'react';
import fakedatas from '../datas/fakedatas';
import ITodoList from '../models/ITodoList';
import {nanoid} from 'nanoid';
import ToDoForm from './ToDoForm';
import IToDos from '../models/IToDos';

/**
 * List of toDos
 * @return {JSX.Element} ToDoList component
 */
function ToDoList(): JSX.Element {
	const [toDoList, setToDoList] = useState<ITodoList>(fakedatas);
	// create var stock in useState : toDoList and setToDoList to rerender when needed

	/**
	 * create name of task and add task in ToDoList
	 * @param {string} title Title of task
	 * @return {void}
	 */
	function add(title: string): void {
		toDoList.tasks.push({
			id: nanoid(),
			done: false,
			title: title,
		});

		setToDoList(structuredClone(toDoList));
	}

	/**
	 * Delete a task
	 * @param {IToDos} task
	 * @return {void}
	 */
	function onDelete(task: IToDos): void {
		const pos = toDoList.tasks.findIndex((t) => t.id === task.id);
		toDoList.tasks.splice(pos, 1);
		setToDoList(structuredClone(toDoList));
	}


	/**
	 * Change state of a task
	 * @param {IToDos} task task from tasks list
	 * @return {void}
	 */
	function onCheckbox(task: IToDos):void {
		const pos = toDoList.tasks.findIndex((t) => t.id === task.id);
		toDoList.tasks.splice(pos, 1, task);
		setToDoList(structuredClone(toDoList));
	}

	return (
		<div>
			<h1>{toDoList.title}</h1>

			<ToDoForm onNewTask={add} />
			<ToDoItems tasks={toDoList.tasks} onDelete={onDelete} onCheckbox={onCheckbox} />
		</div>
	);
}

export default ToDoList;
