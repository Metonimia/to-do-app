import React from "react";
import Todo from "./Todo";

const TodoList = props => (
	<ul className="to-do-list">
		{props.items.map(item => (
			<Todo
				key={item.id}
				text={item.text}
				removeItem={() => props.removeTodo(item.id)}
			/>
		))}
	</ul>
);

export default TodoList;
