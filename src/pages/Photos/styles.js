const styles = theme => ({
    content: {
        display: 'flex',
        flexDirection: 'column',
        gap: 30
    },

    pagination: {
        '& .MuiPagination-ul': {
            justifyContent: 'center'
        }
    },

    select: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 15
    },

    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: 30
    }
});

export default styles;