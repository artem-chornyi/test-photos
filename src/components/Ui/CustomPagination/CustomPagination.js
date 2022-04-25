import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const CustomPagination = ({ count, onChange }) => {
    return (
        <Stack spacing={2}>
        <Pagination
            count={ count }
            showFirstButton
            showLastButton
            siblingCount={3}
            size="large"
            onChange={ onChange }
        />
        </Stack>
    );
};

export default CustomPagination;