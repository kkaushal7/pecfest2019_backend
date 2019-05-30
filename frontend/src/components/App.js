import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import Sponsors from './Pages/Sponsors';
import About from './Pages/About';
import Events from './Pages/Events';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import Megashows from './Pages/Megashows';
import Background from './layout/Background/Background';
// import PrivateRoute from './common/PrivateRoute';
import {Provider as AlertProvider} from "react-alert";
import AlertTemplate from 'react-alert-template-basic';
import Alerts from './layout/Alerts';
import {Provider} from "react-redux";
import Header from "./layout/Header";
import {loadUser} from '../actions/auth';
import store from "../store";

const alertOptions = {
    timeout: 3000,
    position: 'top center'
};

class App extends Component {

    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                        <Background/>
                        <div className={"overlay-2"}>
                            <Header/>
                            <Alerts />
                            <div className="furtherPages">
                                <Switch>
                                    <Route exact path="/" component={Home}/>
                                    <Route exact path="/sponsors" component={Sponsors}/>
                                    <Route exact path="/about" component={About}/>
                                    <Route exact path={"/megashows"} component={Megashows}/>
                                    <Route exact path={"/events"} component={Events}/>
                                    <Route exact path={"/login"} component={LoginPage}/>
                                    <Route exact path={"/register"} component={RegisterPage}/>
                                </Switch>
                            </div>
                        </div>
                    </Router>
                </AlertProvider>
            </Provider>

        );
    }
}

export default App;