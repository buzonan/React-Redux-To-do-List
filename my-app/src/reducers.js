import { combineReducers} from "redux";

const taskList = (state = [], action) => {
    if(action.type === "ADD_TASK"){
        return [...state, action.payload];
    }
    return state;
};

export default combineReducers({
    taskList
})