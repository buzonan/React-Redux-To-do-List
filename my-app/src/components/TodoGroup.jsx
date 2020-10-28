import React, {Component} from 'react';
import TodoItemContainer from "../containers/TodoItemContainer";
import axios from "axios";

class TodoGroup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasklist: []
        }
    }

    componentDidMount() {
        axios.get('https://5d6f7991482b530014d2e376.mockapi.io/api/todos').then(response => {
            console.log(response);
            this.setState({
                tasklist: response.data
            })
        })
    }

    render() {
        const todoItems = this.state.tasklist.map((todos) => (
            <TodoItemContainer key={todos.id} todo={todos} />));
        return (
            <div>
                {todoItems}
            </div>
        );
    }
}

export default TodoGroup;