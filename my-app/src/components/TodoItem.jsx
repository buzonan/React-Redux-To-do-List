import React, {Component} from 'react';

class TodoItem extends Component {
    render() {
        return (
            <section>
                <span>{this.props.todos.text}</span>
            </section>
        );
    }
}

export default TodoItem;