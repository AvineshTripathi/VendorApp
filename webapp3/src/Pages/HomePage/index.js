import React  from 'react';
import Title from '../../components/Title';
import Body from './Body';
import { makeStyles } from '@material-ui/core/styles';
import MovableBanner from '../HomePage/MovableBanner';
import Covidbanner from '../../Pages/HomePage/Covidbanner';


const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

const HomePage = () => {
    const classes = useStyles();
    return (
        <div>
            <div><Title /></div>
            <div><Covidbanner /></div>
            <div><MovableBanner /></div>
            <div><Body /></div>
        </div>
        
        
    );
   
};
export default HomePage;