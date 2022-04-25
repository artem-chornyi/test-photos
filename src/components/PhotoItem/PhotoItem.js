import React from 'react';
import { CustomCard } from '../Ui';

const PhotoItem = ({ photo, handleOpen, handleRemove }) => {

    return (
        <CustomCard
            photo={ photo }
            handleOpen={ handleOpen }
            handleRemove={ handleRemove }
        />
    )
};

export default PhotoItem;