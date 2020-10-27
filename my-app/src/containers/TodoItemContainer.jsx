import {connect} from 'react-redux';
import TodoItem from "../components/TodoItem";
import {addTask} from "../actions";


const mapDispatchToProps = (dispatch) => ({
    addTask: (task) => {dispatch(addTask(task))}
});

const TodoItemContainer = connect(null, mapDispatchToProps)(TodoItem);

export default TodoItemContainer;