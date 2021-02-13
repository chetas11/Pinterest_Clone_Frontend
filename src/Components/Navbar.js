import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PinterestIcon from '@material-ui/icons/Pinterest';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="transparent" position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <PinterestIcon className="logo" /> <span className="hide">Pinterest</span>
          </Typography>
          <Link to="/">
            <Button>login</Button>
          </Link>
          <Link to="/signup"><Button>Signup</Button></Link>
          <Link to="/about"><Button>About</Button></Link>
        </Toolbar>
      </AppBar> 
    </div>
  );
}