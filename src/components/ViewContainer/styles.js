import { colors } from "../../theme/colors";

const styles = theme => ({
    viewContainer: {
        background: colors.COLOR_BG,
        width: '100%',
        minHeight: '100vh'
    },

    wrapper: {
        maxWidth: 1300,
        padding: '0 30px 30px',
        margin: 'auto',
    }
})

export default styles;