import React, {Component} from 'react';
import AppRouter from '../routers/AppRouter';
import {loadUser} from '../actions/auth';
import store from "../store";
import Provider from "react-redux/es/components/Provider";

class App extends Component {

    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>
                <AppRouter/>
            </Provider>

        );
    }
}

export default App;