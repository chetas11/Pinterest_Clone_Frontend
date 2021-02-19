import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import React, {useEffect} from 'react'
import ReactDOM from 'react-dom'
import Login from './Components/Login'
import Signup from './Components/Signup'
import ForgotPassword from './Components/ForgotPassword'
import About from './Components/About'
import './App.css'
import UserHome from "./Components/UserHome";
import UpdatePassword from './Components/UpdatePassword'
import Expired from './Components/Expired'


export default function App() {

    let User = false

    useEffect(() => {
        User = localStorage.getItem('LoggedIn') === "true"
    }, [localStorage])


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
            <Route path="/expired" >
                  <Expired />
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
