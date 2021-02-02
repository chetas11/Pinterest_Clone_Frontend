import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PinterestIcon from '@material-ui/icons/Pinterest';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Axios from 'axios'
import 'regenerator-runtime/runtime'

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



export default function AddPins() {
    const classes = useStyles()
    const [pins, setPins] = useState({img:"",title:"",author:""})

    function createPins(){

    }

    function onTitleChange(e){
      setPins({
        ...pins,
        title:e.target.value
      })
    }

    function onAuthorChange(e){
      setPins({
        ...pins,
        author:e.target.value
      })
    }

    function onSourceChange(e){
      setPins({
        ...pins,
        img:e.target.value
      })
    }

    return (
        <>
          <div className="row text-center mt-5">
                <div className="col-lg-4 col-md-4 col-sm-6"></div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                <PinterestIcon fontSize="large" />
                <h1>Add your Pins</h1>
                <h6 className="mb-4">Find new ideas to try</h6>
                    <Grid container direction={"column"} spacing={3} justify="space-between">
                        <Grid item>
                        <TextField onChange={onSourceChange} required value={pins.img} fullWidth id="outlined-email"  label="Source" variant="outlined" />
                        </Grid>
                        <Grid item>
                        <TextField onChange={onTitleChange}  required value={pins.title} fullWidth  id="outlined-pass" label="Title" variant="outlined" />
                        </Grid>
                        <Grid item>
                        <TextField onChange={onAuthorChange}  required value={pins.author} fullWidth id="outlined-age" label="Author" variant="outlined" />
                        </Grid>
                        <Grid item>
                        <Button onClick={createPins} fullWidth variant="contained" color="primary">
                            Add
                        </Button>
                        </Grid>
                    </Grid> 
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6"></div>  
            </div>  
        </>
    )
}
