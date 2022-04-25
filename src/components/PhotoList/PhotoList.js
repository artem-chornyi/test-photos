import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import PhotoItem from '../PhotoItem';
import { CustomModal } from '../Ui'
import styles from './styles';

const useStyles = makeStyles(styles);

const PhotoList = ({photos}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [photo, stePhoto] = useState({});
    const [photosAfterChange, stePhotosAfterChange] = useState([]);

    useEffect(() => {
        console.log('test');
        stePhotosAfterChange(photos)
    }, [photos])

    const handleClose = () => {
        setOpen(false);
        stePhoto({});
    }

    const handleOpen = photo => {
        setOpen(true);
        stePhoto(photo);
    }

    const handleRemove = id => {
        stePhotosAfterChange([...photosAfterChange].filter(photo => photo.id !== id));
    }

    return (
        <div className={ classes.list }>
            {photosAfterChange.map(photo => (
                <PhotoItem
                    handleOpen={ handleOpen }
                    handleRemove={ handleRemove }
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