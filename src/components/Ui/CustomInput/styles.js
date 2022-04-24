import { colors } from "../../../theme/colors";


const styles = theme => ({
    search: {
        fontColor: colors.COLOR_WHITE
    },

    input: {
        '& label.Mui-focused': {
            color: colors.COLOR_GREEN,
        },

        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                 borderColor: colors.COLOR_WHITE,
            },
            '&:hover fieldset': {
                borderColor: colors.COLOR_GREEN,
            },
            '&.Mui-focused fieldset': {
                borderColor: colors.COLOR_GREEN,
            },
        },

        '& .MuiTextField-root': {
            borderColor: 'red'
        },

        '& .MuiInputLabel-root': {
            color: colors.COLOR_WHITE,
        }
    }
})

export default styles;