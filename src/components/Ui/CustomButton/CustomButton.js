import React from "react";
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import styles from './styles';

const useStyles = makeStyles(styles);

const CustomButton = ({ onClick, value, ...props }) => {
    const classes = useStyles();

    return (
        <Button
            onClick={ onClick }
            className={ classes.button }
            variant='contained'
            { ...props }
        >
            { value }
        </Button>
    )
};

export default CustomButton;