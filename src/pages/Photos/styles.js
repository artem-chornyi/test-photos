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
    }
});

export default styles;