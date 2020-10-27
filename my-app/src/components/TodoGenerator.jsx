import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';


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
        var task = {
            id: uuidv4(),
            text: this.state.text,
            done: false
        }

        this.props.addTask(task)
    };

    render() {

        return (
            <div>
                <input type="text" name="task" id="task" placeholder="Input Task here" onChange={this.getTask} />
                <input type="button" value="add" onClick={this.addTask}/>
            </div>
        );
    }
}

export default TodoGenerator;