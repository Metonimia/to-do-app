import React, { Component } from "react";

const TodoForm = props => (
	<form>
		<input
			type="text"
			value={props.val}
			placeholder="Type to add new tasks"
		/>
	</form>
);

export default TodoForm;
