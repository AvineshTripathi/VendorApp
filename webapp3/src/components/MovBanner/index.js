import { blue, red } from '@material-ui/core/colors';
import { makeStyles } from  '@material-ui/core/styles';

const useStyles= makeStyles({
    root: {
        border: 3,
        borderColor: blue,
        color: blue,
        paddingLeft: 500,
    },
}); 

const MovBanner = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <img src="dragon.jpg" />
        </div>
    );
}

export default MovBanner;