import React from 'react';
import { makeStyles } from '@mui/styles';
import PhotoItem from '../PhotoItem';
import styles from './styles';

const useStyles = makeStyles(styles);

const PhotoList = ({photos}) => {
    const classes = useStyles();

    return (
        <div className={ classes.list }>
            {photos.map(photo => (
                <PhotoItem
                    key={ photo.id }
                    albumId={ photo.albumId }
                    id={ photo.id }
                    thumbnailUrl={ photo.thumbnailUrl }
                    title={ photo.title }
                    url={ photo.url }
                />
            ))}
        </div>
    )
};

export default PhotoList;