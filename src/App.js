import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom'
import Login from './Components/Login'
import Signup from './Components/Signup'
import ForgotPassword from './Components/ForgotPassword'
import About from './Components/About'
import './App.css'
import UserHome from "./Components/UserHome";
import UpdatePassword from './Components/UpdatePassword'
 


export default function App() {
    return (
        <>
        <Router>
        <Switch>
            <Route path="/signup">
                <Signup />
            </Route>
            <Route path="/forgot">
                <ForgotPassword />
            </Route>
            <Route path="/about" >
                  <About />
            </Route>
            <Route path="/update">
                  <UpdatePassword />
            </Route>
            <Route path="/home/" >
                  <UserHome />
            </Route>
            <Route exact path="/">
                  <Login />
            </Route>
          </Switch>
        </Router>
    </>
    )
}

ReactDOM.render(<App />, document.querySelector("#react-root"))
