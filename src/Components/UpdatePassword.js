import React, {useState} from 'react'
import Navbar from './Navbar'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Axios from 'axios'
import useLoader from '../hooks/useLoader';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useHistory } from "react-router-dom";




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


export default function UpdatePassword() {
    const classes = useStyles()
    const [user, setPasswords] = useState({password:"", confirmpassword:""})
    const [loader, showLoader, hideLoader] = useLoader()
    const URL = "https://damp-ocean-44105.herokuapp.com/changepassword"
    const history = useHistory();

    function notify() {
      toast.error('Password Mismatch, try again!', { position: toast.POSITION.TOP_CENTER, autoClose:4000 })
    }

    function confirmationLink() {
      toast.success('Password Chaanged, try to login with new password'
      , { position: toast.POSITION.TOP_CENTER, autoClose:4000 })
    }

    function onPasswordChange(e){
        setPasswords({
            ...user,
            password:e.target.value
        })
    }

    function onConfirmPasswordChange(e){
        setPasswords({
            ...user,
            confirmpassword:e.target.value
        })
    }

    const updatePass = async () => {
      showLoader()
        try {
          await Axios.post(URL, user)
          .then((response) => {
            hideLoader()
            if((response.data)==="Failed"){
              notify()
            }else{
              confirmationLink();
            }
          });
        }
       catch (e) {
          alert(e)
        }
  }



    return (
        <>
        <Navbar />
            <div className="row text-center mt-3">
                <div className="col-lg-4 col-md-4 col-sm-6"></div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <h2 className ="mt-4">Don't worry we got you.. 😎</h2>
                    <h4 className="mb-3">Update your new password</h4>
                    <Grid container direction={"column"} spacing={3} justify="space-between">
                        <Grid item>
                        <TextField type="password" className="width" required value={user.password} onChange={onPasswordChange}  id="outlined-pass" label="Password" variant="outlined" />
                        </Grid>
                        <Grid item>
                        <TextField type="password" className="width" required value={user.confirmpassword} onChange={onConfirmPasswordChange}  id="outlined-Cpass" label="Confirm Password" variant="outlined" />
                        </Grid>
                        <Grid item>
                        <Button onClick={updatePass} className="width" variant="contained" color="primary">
                            Update
                        </Button>
                        </Grid>
                    </Grid> 
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6"></div>  
            </div>
            {loader}
        </>
    )
}
