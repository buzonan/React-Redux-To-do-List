import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {AxiosInstance as axios} from "axios";


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
        axios.post('https://5d6f7991482b530014d2e376.mockapi.io/api/todos', {
            text: this.state.text
        }).then(response=>{
            this.props.addTask(response.data)
        });
    };

    render() {

        return (
            <div>
                <input type="text" name="task" id="task" placeholder="Input Task here" onChange={this.getTask} />
                <input type="button" value="+" onClick={this.addTask}/>
            </div>
        );
    }
}

export default TodoGenerator;