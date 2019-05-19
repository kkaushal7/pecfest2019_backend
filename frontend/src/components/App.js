import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import Header from './layout/Header';
// import Dashboard from './leads/Dashboard';
// import Login from './accounts/Login';
// import Register from './accounts/Register';
// import PrivateRoute from './common/PrivateRoute';
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from 'react-alert-template-basic';
// import Alerts from './layout/Alerts';
import { Provider } from "react-redux";
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
      <Fragment>
        <h1>Pecfest App</h1>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));