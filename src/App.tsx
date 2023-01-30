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
		<div className='App w-96 h-922 relative'>
			<div className='bg-waves bg-cover bg-no-repeat bg-bottom absolute bottom-0 z-1'>
				<ToDoList />
			</div>
		</div>
	);
}

export default App;
