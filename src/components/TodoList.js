import React from 'react';
import Todo from './Todo';

const TodoList = props => <ul className = "to-do-list">{props.items.map(item => <Todo text = {item.text} id = {item.id} />)} 
	</ul>

export default TodoList;
