import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));
export default function AllPins() {
    const classes = useStyles();
    const URL = "https://damp-ocean-44105.herokuapp.com/home" 
    const [data, setData] = useState([])
  
  

useEffect(
  function getData() {
  try {
    Axios.get(URL)
    .then((res)=> setData(res.data))
  } catch (error) {
    console.error(error);
  }
},[data])

    return (
            <>
            <div className="row text-center mt-2">
            {data.map((item, tabIndex) => (
            <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="card" >
                <img src={item.img} height="250px" className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h4 className="card-title">{item.title}</h4>
                    <h6 className="card-title">{item.author}</h6>
                </div>
            </div>
            </div>
            ))}
            </div>
        </>
    )
}
