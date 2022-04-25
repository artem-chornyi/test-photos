import React from 'react';
import { CustomCard } from '../Ui';

const PhotoItem = ({ photo, handleOpen }) => {

    return (
        <CustomCard
            photo={ photo }
            handleOpen={ handleOpen }
        />
    )
};

export default PhotoItem;