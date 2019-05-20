import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
// import Header from './layout/Header';
import Home from './Pages/Home';
import Sponsors from './Pages/Sponsors';
import About from './Pages/About';
import Events from './Pages/Events';
import  Login from './Pages/Login';
import Megashows from './Pages/Megashows';
// import PrivateRoute from './common/PrivateRoute';
// import {Provider as AlertProvider} from "react-alert";
// import AlertTemplate from 'react-alert-template-basic';
// import Alerts from './layout/Alerts';
// import {Provider} from "react-redux";
import Header from "./layout/Header";
// import { loadUser } from '../actions/auth';
// import store from "../store";

const alertOptions = {
    timeout: 3000,
    position: 'top center'
};

class App extends Component {

    componentDidMount() {
        // store.dispatch(loadUser());
    }

    render() {
        return (
            // <Provider store={store}>
            //   <AlertProvider template={AlertTemplate} {...alertOptions}>
            //     <Router>
            //       <Fragment>
            //         <Header />
            //         <Alerts />
            //         <div className="container">
            //           <Switch>
            //             <PrivateRoute exact path="/" component={Dashboard} />
            //             <Route exact path="/register" component={Register} />
            //             <Route exact path="/login" component={Login} />
            //           </Switch>
            //         </div>
            //       </Fragment>
            //     </Router>
            //   </AlertProvider>
            // </Provider>
            <Router>
                <Fragment>
                    <Header />
                    {/*<Alerts />*/}
                    <div className="container" id={"page-wrap"}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/sponsors" component={Sponsors} />
                            <Route exact path="/about" component={About} />
                            <Route exact path={"/megashows"} component={Megashows}/>
                            <Route exact path={"/events"} component={Events}/>
                            <Route exact path={"/login"}  component={Login}/>
                        </Switch>
                    </div>
                </Fragment>
            </Router>

        );
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));