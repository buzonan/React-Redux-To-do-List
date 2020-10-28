import React from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import {BrowserRouter, HashRouter, Link, Switch, Route} from "react-router-dom";
import TodoGeneratorContainer from "./containers/TodoGeneratorContainer";
import TodoGroupContainer from "./containers/TodoGroupContainer";
import TodoDoneContainer from './containers/TodoDoneContainer';
import axios from "axios";
import {getAllTaskList} from "./apis/todos";
import {initTaskList} from "./actions";
import {connect} from "react-redux";

class App extends React.Component {
    componentDidMount() {
        getAllTaskList().then(response => {
            this.props.initTaskList(response.data);
        })
    }

    render() {
        return (
            <React.Fragment>
                <header className="App-header">
                    <BrowserRouter>
                        <ul>
                            <li>
                                <h2><Link to="/"> Go to Main Page</Link></h2>
                            </li>
                            <li>
                                <h2><Link to="/generator"> Go to Add To Do Task</Link></h2>
                            </li>
                            <li>
                                <h2><Link to="/list"> Go to Task List</Link></h2>
                            </li>
                            <li>
                                <h2><Link to="/done"> Go to Done Tasks</Link></h2>
                            </li>
                        </ul>
                        <Switch>
                            <Route exact path="/" component={TodoList}></Route>
                            <Route path="/generator" component={TodoGeneratorContainer}></Route>
                            <Route path="/list" component={TodoGroupContainer}></Route>
                            <Route path="/done" component={TodoDoneContainer}></Route>
                        </Switch>
                        {/* <ToDoList /> */}
                    </BrowserRouter>
                </header>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    initTaskList: tasks => dispatch(initTaskList(tasks))
});

export default connect(null, mapDispatchToProps)(App);

