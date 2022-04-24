import React from "react";
import { makeStyles } from '@mui/styles';
import styles from './styles';

const useStyles = makeStyles(styles);

const ViewContainer = ({children}) => {
    const classes = useStyles();

    return (
        <div className={ classes.viewContainer }>
            <div className={ classes.wrapper }>
                { children }
            </div>
        </div>
    )
};

export default ViewContainer;