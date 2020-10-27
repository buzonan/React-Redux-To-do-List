import {connect} from 'react-redux';
import TodoGroup from "../components/TodoGroup";

const mapStateToProps = state => ({
    taskList: state.taskList
});

const TodoGroupContainer = connect(mapStateToProps, null)(TodoGroup);


export default TodoGroupContainer;