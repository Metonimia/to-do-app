import React, { Component } from "react";

const TodoForm = props => (
  <form onSubmit={props.addTodo}>
    <input
      type="text"
      value={props.val}
      onChange={props.onChangeHandle}
      placeholder="Type to add new tasks"
    />
  </form>
);

export default TodoForm;
