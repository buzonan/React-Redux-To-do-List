import React, {Component} from 'react';

class TodoItem extends Component {

    markDone = () => {
        const taskId = this.props.todos.id;
        this.props.markTaskDone(taskId);
    };

    removeTask = () => {
        const taskId = this.props.todos.id;
        this.props.deleteTask(taskId);
    };

    render() {
        const style = {
          textDecoration: this.props.todos.done ? 'line-through' : ''
        };
        return (
            <section>
                <input type={"button"} value={"✔"} name={"done"} id={"name"} onClick={this.markDone}/>
                <span style={style}>     {this.props.todos.text}     </span>
                <input type={"button"} value={"X"} name={"delete"} id={"delete"} onClick={this.removeTask}/>
            </section>
        );
    }
}

export default TodoItem;