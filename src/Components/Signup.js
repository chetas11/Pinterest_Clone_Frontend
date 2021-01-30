import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PinterestIcon from '@material-ui/icons/Pinterest';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



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
    return (
            <div className="row text-center mt-5">
                <div className="col-lg-4 col-md-4 col-sm-6"></div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                <PinterestIcon fontSize="large" />
                <h1>Welcome to Pinterest</h1>
                <h6 className="mb-4">Find new ideas to try</h6>
                    <Grid container direction={"column"} spacing={3} justify="space-between">
                        <Grid item>
                        <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" />
                        </Grid>
                        <Grid item>
                        <TextField fullWidth type="password" id="outlined-basic" label="Password" variant="outlined" />
                        </Grid>
                        <Grid item>
                        <TextField fullWidth type="number" id="outlined-basic" label="Age" variant="outlined" />
                        </Grid>
                        <Grid item>
                        <Button fullWidth variant="contained" color="primary">
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
