import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import styles from './styles';

const useStyles = makeStyles(styles);


const CustomRoutLink = ({children, to, ...props}) => {
    const classes = useStyles();
    const match = useMatch(to);

    const className = () => {
        return match ? classes.active : classes.link;
    };

    if (match ) {
        if (children === 'Home') {
            document.title = 'React App';
        } else {
            document.title = children;
        }
    };

    return (
        <Link
            to={ to }
            className={ className() }
            {...props}
        >
            {children}
        </Link>
    )
};

export default CustomRoutLink;