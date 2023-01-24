import React from 'react';
import {ReactComponent as Logo} from './logo.svg';
import './App.css';

/**
 * L'application de Todo
 * @return {JSX.Element} L'application de Todo
 */
function App(): JSX.Element {
	return (
		<div className="App">
			<header className="App-header">
				<Logo />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;