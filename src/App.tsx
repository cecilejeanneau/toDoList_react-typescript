import React from 'react';
// import {ReactComponent as Logo} from './logo.svg';
import './App.css';
import ToDoList from './components/ToDoList';

/**
 * L'application de Todo
 * @return {JSX.Element} L'application de Todo
 */
function App(): JSX.Element {
	return (
		<div className='w-full flex flex-col bg-color-light-primary'>
			<ToDoList />
		</div>
	);
}

export default App;
