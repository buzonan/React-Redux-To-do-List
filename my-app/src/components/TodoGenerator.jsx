import React, {Component} from 'react';
import {PlusCircleOutlined} from '@ant-design/icons';
import {addNewTask} from "../apis/todos";
import { Form, Input, Button, Checkbox } from 'antd';


class TodoGenerator extends Component {

    addTask = values => {
        addNewTask(values.taskDetail).then(response => {
            this.props.addTask(response.data);
            console.log(values.taskDetail)
        })
    };

    render() {
        return (
            <Form layout="inline" name="AddTaskForm" onFinish={this.addTask}>
                <Form.Item name="taskDetail" rules={[{ required: true, message: 'Please input your task description.' }]}>
                    <Input placeholder="Type Task Description...."/>
                </Form.Item>
                <Form.Item layout="inline">
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default TodoGenerator;