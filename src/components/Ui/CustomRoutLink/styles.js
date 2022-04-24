import { colors } from "../../../theme/colors"

const link = {
    textDecoration: 'none'
}

const styles = theme => ({
    active: {
        ...link,
        color: colors.COLOR_GREEN
    },

    link: {
        ...link,
        color: colors.COLOR_WHITE
    }

});

export default styles;