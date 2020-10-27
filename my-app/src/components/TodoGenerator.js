import React, {Component} from 'react';

class TodoGenerator extends Component {
    render() {
        return (
            <div>
                <input type="text" name="task" id="task" placeholder="Input Task here"/>
                <input type="button" value="add"/>
            </div>
        );
    }
}

export default TodoGenerator;