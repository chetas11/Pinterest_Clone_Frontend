import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PinterestIcon from '@material-ui/icons/Pinterest';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import Axios from 'axios'
import 'regenerator-runtime/runtime'

export default function Profile() {
    const history = useHistory();
    function handleChange(){
        history.push("/");
    }

    return (
        <>
          <div className="row text-center mt-5">
                <div className="col-lg-4 col-md-4 col-sm-6"></div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                <PinterestIcon fontSize="large" />
                <h1 className="mb-4"><u>CHETAN BIRMOLE</u></h1>
                    <Grid container direction={"column"} spacing={3} justify="space-between">
                        <Grid item>
                            <label className="form-control">Username</label>
                            <label className="form-control">First Name</label>
                            <label className="form-control">Last Name</label>
                            <label className="form-control">Age</label>
                        </Grid>
                        <Grid item>
                        <Button onClick={handleChange}  fullWidth variant="contained" color="secondary">
                            Logout
                        </Button>
                        </Grid>
                    </Grid> 
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6"></div>  
            </div>  
        </>
    )
}
