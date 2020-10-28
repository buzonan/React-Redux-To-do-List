import React, {Component} from 'react';
import {PlusCircleOutlined} from '@ant-design/icons';
import {addNewTask} from "../apis/todos";

class TodoGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    getTask = (event) => {
        const task = event.target.value;
        this.setState(() => {
            return {text: task};
        })
    };


    addTask = () => {
        if(this.state.text === ""){
            alert("Please Input Task");
            return;
        }

        addNewTask(this.state.text).then(response => {
            this.props.addTask(response.data)
        })
    };

    render() {

        return (
            <div>
                <input type="text" name="task" id="task" placeholder="Input Task here" onChange={this.getTask} />
                <input type="button" icon={<PlusCircleOutlined />} onClick={this.addTask}/>
            </div>
        );
    }
}

export default TodoGenerator;