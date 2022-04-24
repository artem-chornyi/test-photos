import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import CustomRoutLink from '../CustomRoutLink';
import { darkTheme, styles } from './styles';

const useStyles = makeStyles(styles);


const CustomHeader = () => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={ darkTheme }>
            <AppBar position="static">
                    <Toolbar className={ classes.root } >
                        <CustomRoutLink to='/'>
                            Home
                        </CustomRoutLink>
                        <CustomRoutLink to='photos'>
                            Photos
                        </CustomRoutLink>
                    </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
};

export default CustomHeader;