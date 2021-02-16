import React, {useState, useEffect} from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import Axios from 'axios'
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

export default function MyPins() {
    const classes = useStyles()
    const [data, setData] = useState([])
    const CurrentUser = window.location.pathname.slice(6)

    

    useEffect(() =>{
      try {
        Axios.put(`https://damp-ocean-44105.herokuapp.com/home/${CurrentUser}`)
        .then((res)=> {
          setData(res.data)
      })
      } catch (error) {
        console.error(error);
      }
    }, [data]) 

    function deleteItem(id){
      const newData = data.filter((item) => item._id !== id)
      const Filtered = data.filter((item) => item._id === id)
      setData(newData)

      try{
      Axios.post("https://damp-ocean-44105.herokuapp.com/delete",Filtered[0])
      .then((res) => {
        if(res === "Failed"){
          alert("Error Occured.. Try Again!")
        }
      })
      }
      catch(e){
        console.log(e)
      }
    }

    return (
            <div className="row mt-2">
                { data.map((item)=> {
                  const onDeleteClick = ()=>{
                    deleteItem(item._id)
                  }
                   return(
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="card" >
                    <img src={item.img} height="300px" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                        <h4 className="card-title text-center">{item.title}</h4>
                        <Button
                          variant="contained"
                          color="secondary"
                          className={classes.button}
                          startIcon={<DeleteIcon />}
                          onClick={onDeleteClick}
                        >
                          Delete
                        </Button>
                        <a className="link" href={item.img}>Click here to view</a>
                    </div>
                    </div>
                </div>
                   )
                })}
            </div>
    )
}
