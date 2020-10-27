import React, {Component} from 'react';

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
        this.props.addTask(() => {
            id: 123;
            text: this.state.text;
            done: false;
        })
    };

    render() {
        return (
            <div>
                <input type="text" name="task" id="task" placeholder="Input Task here" onChange={this.getTask}/>
                <input type="button" value="add" onClick={this.addTask}/>
            </div>
        );
    }
}

export default TodoGenerator;