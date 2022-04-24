import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});

const styles = theme => ({
    root: {
        justifyContent: 'space-around',
    }
})



export {
    darkTheme,
    styles
}