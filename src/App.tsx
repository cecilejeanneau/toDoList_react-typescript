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
		<div className='App bg-waves bg-cover bg-no-repeat bg-bottom'>
			<ToDoList />
		</div>
	);
}

export default App;
