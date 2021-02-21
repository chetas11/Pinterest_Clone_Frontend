import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios'
import useLoader from '../hooks/useLoader';
import InputField from "./Searchbar"


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
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
    const [loader, showLoader, hideLoader] = useLoader()
    const [searchText, setSearchText] = useState("");
  
useEffect(() => {
  showLoader()
  try {
    Axios.get(URL)
    .then((res)=> {
    
    setData(res.data)
    hideLoader()
    })
  } catch (error) {
    console.error(error);
  }
},[])

const onInputChnage = (e) =>{
    setSearchText(e.target.value)
}


    return (
            <>
            <InputField onInputChnage={onInputChnage} value={searchText}/>
            <div className="row text-center mt-4">
            {data.filter((item) => {
              if(searchText===""){
                return item
              }else if(item.title.toLowerCase().includes(searchText.toLowerCase())){
                return item
              }
            }).map((item, tabIndex) => (
            <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="card" >
                <img src={item.img} height="300px" className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h4 className="card-title">{item.title}</h4>
                    <h6 className="card-title">{item.author}</h6>
                </div>
            </div>
            </div>
            ))}
            </div>
            {loader}
        </>
    )
}
