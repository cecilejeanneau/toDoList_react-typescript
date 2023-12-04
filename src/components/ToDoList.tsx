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
		<div className='w-full relative md:overflow-hidden h-screen'>
			<header className='sticky top-0 text-center p-6 pt-0 z-5'>
				<p className='bg-light-nuance-40/80 rounded-xl rounded-t-none text-3xl font-bold uppercase w-fit p-4 pt-0 m-auto'>
					Hello - {toDoList.username}</p>
			</header>
			<div className='border-b-2 border-black md:border-l-2 md:border-b-0 md:absolute md:right-0 md:h-screen p-6 md:w-56 overflow-auto
			md:overflow-y-auto'>
				<h2 className='underline text-3xl font-bold'>your lists</h2>
				<div className='snap-x md:snap-y flex justify-between gap-2 md:flex-col overflow-auto '>
					<h3 className='w-fit p-5 text-2xl font-semibold bg-dark-color-20 rounded-lg'>{toDoList.title}</h3>
					<h3 className='w-fit p-5 text-2xl font-semibold bg-dark-color-20 rounded-lg'>{toDoList.title}</h3>
					<h3 className='w-fit p-5 text-2xl font-semibold bg-dark-color-20 rounded-lg'>{toDoList.title}</h3>
					<h3 className='w-fit p-5 text-2xl font-semibold bg-dark-color-20 rounded-lg'>{toDoList.title}</h3>
					<h3 className='w-fit p-5 text-2xl font-semibold bg-dark-color-20 rounded-lg'>{toDoList.title}</h3>
					<h3 className='w-fit p-5 text-2xl font-semibold bg-dark-color-20 rounded-lg'>{toDoList.title}</h3>
					<h3 className='w-fit p-5 text-2xl font-semibold bg-dark-color-20 rounded-lg'>{toDoList.title}</h3>
					<h3 className='w-fit p-5 text-2xl font-semibold bg-dark-color-20 rounded-lg'>{toDoList.title}</h3>
				</div>
				{/* <hr className='border-2.5 border-black' /> */}
			</div>

			<ToDoItems tasks={toDoList.tasks} onDelete={onDelete} onCheckbox={onCheckbox} />
			<ToDoForm onNewTask={add} tasks={toDoList.tasks}/>
		</div>
	);
}

export default ToDoList;
