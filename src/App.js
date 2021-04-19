import React from 'react'
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from '../src/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Login from './Login';
import Signup from "./Signup";
import ForgotPass from "./ForgotYourPass"
import ResetPass from "./ResetYourPass";
import PostedJobs from "./UserComponents/PostedJobs";
import PostAJob from "./UserComponents/PostAJob";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/forgotpass' component={ForgotPass} />
          <Route exact path='/resetpass' component={ResetPass} />
          <Route exact path='/postedjobs' component={PostedJobs} />
          <Route exact path='/postajob' component={PostAJob} />
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
