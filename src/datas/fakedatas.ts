import {nanoid} from 'nanoid';
import ITodoList from '../models/ITodoList';
import IToDos from '../models/IToDos';

export default <ITodoList>{
	title: 'Courses de Noël',
	tasks: [
		<IToDos>{id: nanoid(), done: true, title: 'Nourrir le chat'},
		<IToDos>{id: nanoid(), done: false, title: 'Faire les courses'},
		<IToDos>{id: nanoid(), done: false, title: 'Cuire le chat'},
		<IToDos>{id: nanoid(), done: false, title: 'Emballer les cadeaux'},
		<IToDos>{id: nanoid(), done: false, title: 'Manger le chat'},
		<IToDos>{id: nanoid(), done: false, title: 'Boire le champagne'},
	],
};
