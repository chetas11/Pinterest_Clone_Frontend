import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PinterestIcon from '@material-ui/icons/Pinterest';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Switch, Route, Link, useHistory  } from "react-router-dom";
import Axios from 'axios'
import Navbar from './Navbar'
import useLoader from '../hooks/useLoader';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

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

  

export default function Login() {
    const classes = useStyles()
    const [user, setUser] = useState({email:"",password:""})
    const addNewURL = "https://damp-ocean-44105.herokuapp.com/login"
    const history = useHistory();
    const [loader, showLoader, hideLoader] = useLoader()

    function notify() {
      toast.error('User not found, signup now', { position: toast.POSITION.TOP_CENTER, autoClose:4000 })
    }

    const LoggedIn = async () => {
      showLoader()
        try {
          await Axios.post(addNewURL, user)
          .then((response) => {
            hideLoader()
            if((response.data)==="Failed"){
              notify()
            }else{
              history.push(`/home/${user.email}`);
              localStorage.setItem("LoggedIn", true)
            }
          });
        }
       catch (e) {
          notify()
        }
  }

   function onPasswordChange(e){
      setUser({
        ...user,
        password:e.target.value
      })
    }

    function onEmailChange(e){
      setUser({
        ...user,
        email:e.target.value
      })
    }

    return (
            <>
            <Navbar />
            <div className="row text-center mt-5">
                <div className="col-lg-4 col-md-4 col-sm-6"></div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                <PinterestIcon fontSize="large" />
                <h1 className="mb-4">Welcome to Pinterest</h1>
                    <Grid container direction={"column"} spacing={3} justify="space-between">
                        <Grid item>
                        <TextField className="width" onChange={onEmailChange} type="email" required id="outlined-basic" label="Email" variant="outlined" />
                        </Grid>
                        <Grid item>
                        <TextField className="width" onChange={onPasswordChange} required type="password" id="outlined-basic" type="password" label="Password" variant="outlined" />
                        </Grid>
                        <Grid item>
                        <Button className="width" onClick={LoggedIn} variant="contained" color="primary">
                            Login
                        </Button>
                        </Grid>
                        <Link to="/forgot">Forgot your password?</Link>
                        <p className="my-0 mx-2">By continuing, you agree to Pinterest's Terms of Service, Privacy policy.</p>
                        <Link to="/signup">Not on Pinterest yet? Sign up</Link>
                    </Grid> 
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6"></div>
            </div>
            {loader}
            </>
    )
}
