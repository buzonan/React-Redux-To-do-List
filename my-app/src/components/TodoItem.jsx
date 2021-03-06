import React, {Component} from 'react';
import {deleteTask, toggleTask} from "../apis/todos";
import { Typography, Button, Tooltip } from 'antd';
import { UserDeleteOutlined } from '@ant-design/icons';

const { Title } = Typography;
class TodoItem extends Component {

    markDone = () => {
        const taskId = this.props.todo.id;
        const taskStatus = this.props.todo.done;

        toggleTask(taskId, taskStatus).then(response => {
            this.props.markTaskDone(response.data.id);
        })
    };

    removeTask = () => {
        const taskId = this.props.todo.id;
        deleteTask(taskId).then(this.props.deleteTask(taskId));
    };

    render() {
        const style = {
          textDecoration: this.props.todo.done ? 'line-through' : ''
        };
        return (
            <section>
                <Button type="text" onClick={this.removeTask} icon={<UserDeleteOutlined/>}/>
                <Button type="text" onClick={this.markDone}>
                    <span style={style}>{this.props.todo.text}</span>
                </Button>
            </section>

        );
    }
}

export default TodoItem;