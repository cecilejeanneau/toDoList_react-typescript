import React from 'react';
// import ToDoItems from './ToDoItems';
// import fakeDatas from '../datas/toDos.js';
import {useState} from 'react';
import fakedatas from '../datas/fakedatas';
import ITodoList from '../models/ITodoList';
import {nanoid} from 'nanoid';
import ToDoForm from './ToDoForm';

/**
 * List of toDos
 * @return {JSX.Element} ToDoList component
 */
function ToDoList() {
	const [toDoList, setToDoList] = useState<ITodoList>(fakedatas);
	// create var stock in useState : toDoList and setToDoList to rerender when needed

	/**
	 * create name of task and add task in ToDoList
	 * @param {string} title Title of task
	 */
	function add(title: string) {
		toDoList.tasks.push({
			id: nanoid(),
			done: false,
			title: title,
		});

		setToDoList(structuredClone(toDoList));
	}

	return (
		<div>
			<h1>{toDoList.title}</h1>

			<ToDoForm onNewTask={add} />
		</div>
	);
}

export default ToDoList;
