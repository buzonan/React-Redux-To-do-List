import {connect} from 'react-redux';
import TodoItem from "../components/TodoItem";
import {deleteTask} from "../actions";


const mapDispatchToProps = (dispatch) => ({
    deleteTask: (taskId) => {dispatch(deleteTask(taskId))}
});

const TodoItemContainer = connect(null, mapDispatchToProps)(TodoItem);

export default TodoItemContainer;