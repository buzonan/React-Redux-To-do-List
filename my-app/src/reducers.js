import { combineReducers} from "redux";

const taskList = (state = [], action) => {
    if(action.type === "ADD_TASK"){
        state.push(action.payload);
        return state;
    }
};

export default combineReducers({
    taskList
})