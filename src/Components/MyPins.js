import React, {useState, useEffect} from 'react'
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import Axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import useLoader from '../hooks/useLoader';

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

export default function MyPins(props) {
    const classes = useStyles()
    const [data, setData] = useState([])
    const CurrentUser = window.location.pathname.slice(6)
    const [loader, showLoader, hideLoader] = useLoader()
    

    useEffect(() =>{
      showLoader()
      try {
        Axios.put(`https://damp-ocean-44105.herokuapp.com/home/${CurrentUser}`)
        .then((res)=> {
          setData(res.data)
          hideLoader()
      })
      } catch (error) {
        console.error(error);
      }
    }, []) 

    return (
            <div className="row text-center mt-2">
                { data.map((item)=> {
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="card" >
                    <img src={item.img} height="300px" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                        <h4 className="card-title">{item.title}</h4>
                        <Fab size="small" color="secondary" aria-label="add" className={classes.margin}>
                        <DeleteIcon />
                        </Fab>
                    </div>
                    </div>
                </div>
              })}
                {loader}
            </div>
    )
}
