import React from 'react';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import styles from './styles';

const useStyles = makeStyles(styles);

const CustomInput = ({ value, onChange, onKeyDown, helperText, ...props }) => {
    const classes = useStyles();

    return (
        <div className={ classes.search }>
            <TextField
                onChange={ onChange }
                value={ value }
                onKeyDown={ onKeyDown }
                variant='outlined'
                helperText={ helperText }
                className={ classes.input }
                error={ helperText ? true : false }
                { ...props }
            />
        </div>
    )
};

export default CustomInput;