import React from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import TodoGeneratorContainer from "./containers/TodoGeneratorContainer";
import TodoGroupContainer from "./containers/TodoGroupContainer";
import TodoDoneContainer from './containers/TodoDoneContainer';
import {getAllTaskList} from "./apis/todos";
import {initTaskList} from "./actions";
import {connect} from "react-redux";
import {Breadcrumb, Menu} from 'antd';
import NotFound from "./components/NotFound";
import { HomeOutlined, CheckOutlined } from '@ant-design/icons';


class App extends React.Component {
    componentDidMount() {
        getAllTaskList().then(response => {
            this.props.initTaskList(response.data);
        })
    }

    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <Link to="/list">Task List</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/done">Done Tasks</Link>
                </Menu.Item>
            </Menu>
        );

        return (
            <React.Fragment>
                <header className="App-header">
                    <BrowserRouter>
                        <Breadcrumb>
                            <Breadcrumb.Item><Link to="/"><HomeOutlined /> Home </Link></Breadcrumb.Item>
                            <Breadcrumb.Item><Link to="/generator"><CheckOutlined /> Add To Do Task</Link></Breadcrumb.Item>
                            <Breadcrumb.Item overlay={menu}>
                                Tasks
                            </Breadcrumb.Item>
                        </Breadcrumb>

                        <Switch>
                            <Route exact path="/" component={TodoList}></Route>
                            <Route path="/generator" component={TodoGeneratorContainer}></Route>
                            <Route path="/list" component={TodoGroupContainer}></Route>
                            <Route path="/done" component={TodoDoneContainer}></Route>
                            <Route component={NotFound}></Route>
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

