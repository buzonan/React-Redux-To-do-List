import React, {Component} from 'react';
import TodoItemContainer from "../containers/TodoItemContainer";
import axios from "axios";

class TodoGroup extends Component {

    render() {
        const todoItems = this.props.taskList.map((todos) => (
            <TodoItemContainer key={todos.id} todo={todos} />));
        return (
            <div>
                {todoItems}
            </div>
        );
    }
}

export default TodoGroup;