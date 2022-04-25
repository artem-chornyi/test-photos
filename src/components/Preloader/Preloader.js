import React from "react"
import preloader from '../assets/image/icons/preloader.svg';
import styles from "./styles";
 import { makeStyles } from '@mui/styles';;

const useStyles = makeStyles(styles);


const Preloader = () => {
    const classes = useStyles();

    return (
        <div className={ classes.preloader } >
            <img src={ preloader } width="100" alt="preloader" />
        </div>
    )
}

export default Preloader;