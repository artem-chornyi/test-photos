import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import PhotoItem from '../PhotoItem';
import { CustomModal } from '../Ui'
import styles from './styles';

const useStyles = makeStyles(styles);

const PhotoList = ({photos}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [photo, stePhoto] = useState({})

    const handleClose = () => {
        setOpen(false);
        stePhoto({});
    }

    const handleOpen = (photo) => {
        setOpen(true);
        stePhoto(photo);
    }

    return (
        <div className={ classes.list }>
            {photos.map(photo => (
                <PhotoItem
                    handleOpen={ handleOpen }
                    key={ photo.id }
                    photo={ photo }
                />
            ))}
            <CustomModal
                open={ open }
                handleClose={ handleClose }
                photo={ photo }
            />
        </div>
    )
};

export default PhotoList;