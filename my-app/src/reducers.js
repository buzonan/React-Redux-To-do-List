import { combineReducers} from "redux";

const initialState = {
    taskList: []
}

const taskList = (state = initialState, action) => {
    if(action.type === "ADD_TASK"){
        return {...state, taskList: action.payload};
    }
    return state;
};

export default combineReducers({
    taskList
})