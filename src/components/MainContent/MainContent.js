import React from "react";
import { makeStyles } from '@mui/styles';
import styles from './styles';

const useStyles = makeStyles(styles);

const MainContent = ({children}) => {
    const classes = useStyles();

    return (
        <div className={ classes.content } >
            { children }
        </div>
    )
};

export default MainContent;