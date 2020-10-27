import React, {Component} from 'react';
import TodoItem from "./TodoItem";

class TodoGroup extends Component {

    render() {
        const todoItems = this.props.taskList.map((todos) => (
            <TodoItem todos={todos} />));
        return (
            <div>
                {todoItems}
            </div>
        );
    }
}

export default TodoGroup;