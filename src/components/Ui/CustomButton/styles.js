import { colors } from "../../../theme/colors";


const styles = theme => ({
    button: {
        backgroundColor: `${ colors.COLOR_GREEN } !important` ,
        '&:hover': {
            backgroundColor: `${ colors.COLOR_DARK_GREEN } !important`,
        },
        height: 54
    }
});

export default styles;