import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import PinterestIcon from '@material-ui/icons/Pinterest';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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


export default function About() {
    const classes = useStyles()
    return (
        <>
        <Navbar />
        <div className="about row">
            <div className ="about-margin col-lg-4 col-md-4 col-sm-6">
                <h3 className="mt-5">WELCOME TO VISUAL DISCOVERY </h3> 
                <h1 className="mb-5">When it comes to a great idea, you know it when you see it </h1>
                <Link to="/">
                    <Button variant="contained" color="secondary">
                            Join Pinterest <PinterestIcon />
                    </Button>
                </Link>
            </div>
            <div className ="col-lg-8 col-md-8 col-sm-6"></div> 
        </div>
        </>
    )
}
