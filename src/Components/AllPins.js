import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
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
},[])

    return (
            <>
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
                {data.map((tile) => (
                <GridListTile key={tile.img} cols={tile.cols || 1}>
                    <img src={tile.img} alt={tile.title} />
                </GridListTile>
                ))}
            </GridList>
        </>
    )
}
