import { colors } from "../../../theme/colors"

const link = {
    textDecoration: 'none'
}

const styles = theme => ({
    active: {
        ...link,
        color: colors.COLOR_LIGHT_GREEN
    },

    link: {
        ...link,
        color: colors.COLOR_GREEN
    }

});

export default styles;