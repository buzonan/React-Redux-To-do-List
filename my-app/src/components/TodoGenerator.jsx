import React, {Component} from 'react';
import {addNewTask} from "../apis/todos";
import { Form, Input, Button, Checkbox } from 'antd';
import { FormInstance } from 'antd/lib/form';


class TodoGenerator extends Component {
    formRef = React.createRef();

    addTask = values => {
        addNewTask(values.taskDetail).then(response => {
            this.props.addTask(response.data);
            this.formRef.current.resetFields();
        })
    };

    render() {
        return (
            <Form layout="inline" ref={this.formRef}name="AddTaskForm" onFinish={this.addTask}>
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