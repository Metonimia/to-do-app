import React from "react";
import uuid from "uuid";
import style from "./App.css";
import Title from "../components/Title";
import Todo from "../components/Todo";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			formValue: "",
			data: [
				{
					id: 1,
					text: "clean room"
				},
				{
					id: 2,
					text: "wash the dishes"
				},
				{
					id: 3,
					text: "feed my cat"
				}
			]
		};
	}
	addTodo(event) {
		event.preventDefault();
		const todo = {
			text: this.state.formValue,
			id: uuid.v4()
		};
		const data = [...this.state.data, todo];
		this.setState({ 
			formValue: "",
			data 
		});
	}
	removeTodo(id) {
		const reminder = this.state.data.filter(todo => todo.id !== id);
		this.setState({ data: reminder });
	}

	onChangeHandle(event) {
		this.setState({
			formValue: event.target.value
		});
	}
	render() {
		return (
			<div className={style.TodoApp}>
				<Title
					title={"Tutaj pojawią się elementy naszej apki"}
					todoCount={this.state.data.length}
				/>
				<TodoForm
					addTodo={this.addTodo.bind(this)}
					val={this.state.formValue}
					onChangeHandle={this.onChangeHandle.bind(this)}
				/>
				<TodoList
					items={this.state.data}
					removeTodo={this.removeTodo.bind(this)}
				/>
			</div>
		);
	}
}

export default App;
