import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PinterestIcon from '@material-ui/icons/Pinterest';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import Axios from 'axios'
import Navbar from './Navbar'
import 'regenerator-runtime/runtime'
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

toast.configure()

export default function Signup() {
    const classes = useStyles()
    const [user, setUser] = useState({firstname:"",lastname:"",email:"",password:"",age:""})
    const addNewURL = "https://damp-ocean-44105.herokuapp.com/addNew"
    const [loader, showLoader, hideLoader] = useLoader()
    const history = useHistory();
    function notify() {
      toast.error('User already present!', { position: toast.POSITION.TOP_CENTER, autoClose:4000 })
    }

    function confirmationLink() {
      toast.success('Please check you mail for the confirmation link to activate your account.'
      , { position: toast.POSITION.TOP_CENTER, autoClose:4000 })
    }

    const createUser = async () => {
      showLoader()
      try{
          await Axios.post(addNewURL, user)
          .then((response) => {
            hideLoader()
            if((response.data)==="Failure"){
                notify() 
                setUser({
                email: "",
                password:"",  
                age:"",
                firstname:"",
                lastname:""
              })
            }else{
              confirmationLink()
              setUser({
                email: "",
                password:"",  
                age:"",
                firstname:"",
                lastname:""
              })
            }
          })
        }catch (e) {
          alert("Error occured, User already present")
           setUser({
                email: "",
                password:"",  
                age:"",
                firstname:"",
                lastname:""
              })
        }
          
          
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

    function onFirstNameChange(e){
      setUser({
        ...user,
        firstname:e.target.value
      })
    }

    function onLastNameChange(e){
      setUser({
        ...user,
        lastname:e.target.value
      })
    }

    return (
      <>
      <Navbar />
            <div className="row text-center mt-3">
                <div className="col-lg-4 col-md-4 col-sm-6"></div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                <PinterestIcon fontSize="large" />
                <h1>Welcome to Pinterest</h1>
                <h6 className="mb-4">Find new ideas to try</h6>
                    <Grid container direction={"column"} spacing={3} justify="space-between">
                        <Grid item>
                        <TextField required value={user.firstname} onChange={onFirstNameChange} fullWidth id="outlined-email" label="First Name" variant="outlined" />
                        </Grid>
                        <Grid item>
                        <TextField required value={user.lastname} onChange={onLastNameChange} fullWidth id="outlined-email" label="Last Name" variant="outlined" />
                        </Grid>
                        <Grid item>
                        <TextField required value={user.email} onChange={onEmailChange} fullWidth id="outlined-email" type="email"  label="Email" variant="outlined" />
                        </Grid>
                        <Grid item>
                        <TextField required value={user.password} onChange={onPasswordChange}  fullWidth type="password" id="outlined-pass" label="Password" variant="outlined" />
                        </Grid>
                        <Grid item>
                        <TextField required value={user.age} onChange={onAgeChange} fullWidth type="number" id="outlined-age" label="Age" variant="outlined" />
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
            {loader}
        </>
    )
}
