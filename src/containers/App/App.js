import React, { Component } from "react";
import './App.css'
import store from "../../store";
import { Provider } from "react-redux";
import CreateRobot from '../CreateRobot'
import DisplayRobot from '../DisplayRobot/index'
import {BrowserRouter as Router , Switch,Route} from "react-router-dom";
import NavBar from '../../components/layout/NavBar/index'
import Landing from '../Landing'
import editRobot from '../editRobot'
import Login from '../../components/auth/Login/Login'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  // use arrow function to create a scope so that "this" refers to App object.
  //Otherwise it points to event,which does not have this.state

  render() {



    return (

      <Provider store={store}>
          <Router>
        <div className="tc">
            <NavBar>
            <Switch>
                <Route exact path='/' component={Landing} />
                <Route exact path='/createRobot' component={CreateRobot} />
                <Route exact path='/viewRobots' component={DisplayRobot} />
                <Route exact path='/robot/edit/:id' component={editRobot} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/signUp' component={CreateRobot} />

            </Switch>

            </NavBar>
        </div>
          </Router>
      </Provider>

    );
  }
}



 export default App;
