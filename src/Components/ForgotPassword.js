import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PinterestIcon from '@material-ui/icons/Pinterest';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Navbar from './Navbar'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import useLoader from '../hooks/useLoader';
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

toast.configure()

export default function ForgotPassword() {
    const classes = useStyles()
    const [user, setEmail] = useState({email:""})
    const URL = "https://damp-ocean-44105.herokuapp.com/resetpassword"
    const [loader, showLoader, hideLoader] = useLoader()

    function notify() {
      toast.error('User not found!', { position: toast.POSITION.TOP_CENTER, autoClose:4000 })
    }

    function confirmationLink() {
      toast.success('Please check you mail for the confirmation link to reset your password.'
      , { position: toast.POSITION.TOP_CENTER, autoClose:4000 })
    }

    const Forgot = async () => {
      showLoader()
      try{
          await Axios.post(URL, user)
          .then((response) => {
            hideLoader()
            if((response.data)==="Failure"){
                notify() 
                setEmail({
                  email:""
                })
            }else{
              confirmationLink()
              setEmail({
                  email:""
                })
            }
          })
        }catch (e) {
         console.log(e)
        }    
  }

  function inputChange(e){
    setEmail({
      email:e.target.value
    })
  }

    return (
      <>
        <Navbar />
            <div className="row text-center mt-5">
                <div className="col-lg-4 col-md-4 col-sm-6"></div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                <PinterestIcon fontSize="medium" />
                <h2>Let's find your Pinterest account</h2>
                <h6 className="mb-4">What’s your email  ?</h6>
                    <Grid container direction={"column"} spacing={3} justify="space-between">
                        <Grid item>
                        <TextField value={user.email} onChange={inputChange} className="width" id="outlined-basic" label="Email" variant="outlined" />
                        </Grid>
                        <Grid item>
                        <Button onClick={Forgot} className="width" variant="contained" color="secondary">
                            Submit
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
