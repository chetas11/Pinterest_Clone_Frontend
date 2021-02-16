import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PinterestIcon from '@material-ui/icons/Pinterest';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Axios from 'axios'
import 'regenerator-runtime/runtime'
import MyPins from './MyPins'
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
    maxWidth: 345,
    },
    media: {
    height: 140
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

export default function AddPins() {
    const classes = useStyles()
    const CurrentUser = window.location.pathname.slice(6)
    const [pins, setPins] = useState({img:"",title:"",author:CurrentUser})
    const URL = "https://damp-ocean-44105.herokuapp.com/addPin" 

    function Success() {
      toast.success('Added Successfully!', { position: toast.POSITION.TOP_CENTER, autoClose:4000 })
    }

    function Failed() {
      toast.error('Error occurred try again please'
      , { position: toast.POSITION.TOP_CENTER, autoClose:4000 })
    }

   
    

    const createPins = async () =>{
          await Axios.post(URL, pins)
          .then((response) => {
            if((response.data)==="Failure"){
              Failed()
              setPins({
                img: "",
                title:"",  
              })
            }else{
              Success()
              setPins({
                img: "",
                title:"",  
              })
            }
          })
    }

    function onTitleChange(e){
      setPins({
        ...pins,
        title:e.target.value
      })
    }

    function onSourceChange(e){
      setPins({
        ...pins,
        img:e.target.value
      })
    }

    const deleteItem = (id) =>{
    console.log(id)
  }

    return (
        <>
          <div className="row text-center mt-2">
                <div className="col-lg-4 col-md-4 col-sm-6"></div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                <PinterestIcon fontSize="large" />
                <h1>Add New Pins</h1>
                <h6 className="mb-4">Find new ideas to try</h6>
                    <Grid container direction={"column"} spacing={3} justify="space-between">
                        <Grid item>
                        <TextField onChange={onSourceChange} required value={pins.img} fullWidth id="outlined-email"  label="Source" variant="outlined" />
                        </Grid>
                        <Grid item>
                        <TextField onChange={onTitleChange}  required value={pins.title} fullWidth  id="outlined-pass" label="Title" variant="outlined" />
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
            <hr />
            <MyPins/>
        </>
        
    )
}
