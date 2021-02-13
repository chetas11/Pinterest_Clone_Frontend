import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PinterestIcon from '@material-ui/icons/Pinterest';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import Axios from 'axios'
import 'regenerator-runtime/runtime'
import useLoader from '../hooks/useLoader';

export default function Profile() {
    const history = useHistory();
    const [user, setUser] = useState({firstname:"",lastname:"",age:"",email:""})
    let currentPath = window.location.pathname
    const [loader, showLoader, hideLoader] = useLoader()

    

    function handleChange(){
        history.push("/");
    }

    useEffect(() => {
        showLoader()
    try {
        Axios.get(`https://damp-ocean-44105.herokuapp.com${currentPath}`)
        .then((res)=>{
        hideLoader()
          setUser({
            email:res.data[0].email,
            firstname:res.data[0].firstname,
            lastname:res.data[0].lastname,
            age:res.data[0].age,
        })})
        
    } catch (error) {
        console.error(error);
    }
    },[])

    

    return (
        <>
          <div className="row text-center mt-5">
                <div className="col-lg-4 col-md-4 col-sm-6"></div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                <PinterestIcon fontSize="large" />
                <h1 className="mb-4"><u>{user.firstname} {user.lastname}</u></h1>
                    <Grid container direction={"column"} spacing={3} justify="space-between">
                        <Grid item>
                            <label className="form-control">Username: {user.email}</label>
                            <label className="form-control">First Name: {user.firstname}</label>
                            <label className="form-control">Last Name: {user.lastname}</label>
                            <label className="form-control">Age: {user.age}</label>
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
            {loader}
        </>
    )
}
