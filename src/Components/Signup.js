import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PinterestIcon from '@material-ui/icons/Pinterest';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    root: {
    flexGrow: 1,
    },
    paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  }
  },
}));



export default function Signup() {
    const classes = useStyles()
    const [user, setUser] = useState({email:"",password:"",age:""})

    const addNewURL = "https://jsonplaceholder.typicode.com/todos"

    function createUser(){
      Axios.post(addNewURL, {
        data: {
          email:user.email,
          password:user.password,
          age:user.age
        }
        }).then((response) => {
          console.log(response);
        }, (error) => {
          console.log(error);
        });
    }

    function onEmailChange(e){
      setUser({
        ...user,
        email:e.target.value
      })
    }

    function onAgeChange(e){
      setUser({
        ...user,
        age:e.target.value
      })
    }

    function onPasswordChange(e){
      setUser({
        ...user,
        password:e.target.value
      })
    }

    return (
            <div className="row text-center mt-5">
                <div className="col-lg-4 col-md-4 col-sm-6"></div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                <PinterestIcon fontSize="large" />
                <h1>Welcome to Pinterest</h1>
                <h6 className="mb-4">Find new ideas to try</h6>
                    <Grid container direction={"column"} spacing={3} justify="space-between">
                        <Grid item>
                        <TextField value={user.email} onChange={onEmailChange} fullWidth id="outlined-email" label="Email" variant="outlined" />
                        </Grid>
                        <Grid item>
                        <TextField value={user.password} onChange={onPasswordChange}  fullWidth type="password" id="outlined-pass" label="Password" variant="outlined" />
                        </Grid>
                        <Grid item>
                        <TextField value={user.age} onChange={onAgeChange} fullWidth type="number" id="outlined-age" label="Age" variant="outlined" />
                        </Grid>
                        <Grid item>
                        <Button onClick={createUser} fullWidth variant="contained" color="primary">
                            Sign Up
                        </Button>
                        </Grid>
                        <small>By continuing, you agree to Pinterest's Terms of Service, Privacy policy.</small>
                        <Link to="/">Already a member? Log in</Link>
                    </Grid> 
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6"></div>  
            </div>
    )
}
