import React from 'react';

const Title = props => <h1>{props.title}</h1>

const TodoList = props => <ul className = "to-do-list">
	<li>{props.task}</li>
</ul>

