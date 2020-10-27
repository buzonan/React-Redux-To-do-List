import React, {Component} from 'react';

class TodoItem extends Component {

    markDone = () => {

    };

    removeTask = () => {
        const taskId = this.props.todos.id;
        this.props.deleteTask(taskId);
    };
    render() {
        return (
            <section>
                <input type={"button"} value={"✔"} name={"done"} id={"name"} onClick={this.markDone}/>
                <span>     {this.props.todos.text}     </span>
                <input type={"button"} value={"X"} name={"delete"} id={"delete"} onClick={this.removeTask}/>
            </section>
        );
    }
}

export default TodoItem;