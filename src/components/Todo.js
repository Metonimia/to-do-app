import React from "react";

const Todo = props => <li onClick={props.removeItem}>{props.text}</li>;

export default Todo;
