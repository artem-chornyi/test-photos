import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import {
    PhotoList,
    Preloader
} from '../../components';
import {
    CustomButton,
    CustomPagination,
    CustomSelect
} from '../../components/Ui'

import values from '../../theme/values';
import { getAllPhotos , getPhotos, getByAlbumIdPhotos } from '../../api/api'
import styles from './styles';

const useStyles = makeStyles(styles);


const Photos = () => {
    const classes = useStyles();
    const [pages, setPages] = useState(values.START_PAGE);
    const [photos, setPhotos] = useState([]);
    const [count, setCount] = useState(0);
    const [loadin, setLoading] = useState(false);
    const [albumId, setAlbumId] = useState([]);
    const [selectedId, setSelectedId] = useState('');
    

    useEffect(() => {
        getAllPhotos()
        .then(photos => {
            const allAlbumId = [];

            photos.forEach(photo => {
                const id = photo.albumId;
                if (!allAlbumId.includes(id)) {
                    allAlbumId.push(photo.albumId);
                }
            })

            setAlbumId(allAlbumId)
        })
        .finally(() => {
            })
    }, [])

    useEffect(() => {
        if (selectedId) {
            setLoading(true);
            setPhotos([]);
            setCount(0);
            getByAlbumIdPhotos(selectedId)
            .then(data => {
                setPhotos(data);
            })
            .catch((err) => {
                alert('Error');
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            })
        } else {
            setLoading(true);
            setPhotos([]);
            getPhotos(pages)
                .then((res) => {
                    setCount(Math.ceil(res.headers.get('x-total-count') / values.LIMIT_PHOTOS));
                    return res.json()
                })
                .then(data => {
                    setPhotos(data);
                })
                .catch((err) => {
                    alert('Error');
                    console.log(err);
                })
                .finally(() => {
                    setLoading(false);
            })
        }
    },[selectedId, pages])

    const handlerPagination = (event, value) => {
        setPages(value);
    }

    const checkedPotos = () => {
        const pagination = () => (
            <div className={ classes.pagination }>
                <CustomPagination
                    count={ count }
                    onChange={ handlerPagination }
                />
            </div>
        )

        return (
            <div className={ classes.content }>
                {photos && (
                    <PhotoList
                        photos={ photos }
                    />
                )}
                {count > 0 && pagination()}
            </div>
        )
    }

    const onClick = () => {
        setSelectedId('');
        setPages(1);
    }

    return (
        <div className={ classes.wrapper }>
            <div className={ classes.select } >
                <CustomSelect
                    albumId={ albumId }
                    setSelectedId={ setSelectedId }
                    selectedId={ selectedId }
                />
                <CustomButton
                    value={ 'Reset' }
                    onClick={ onClick }
                />
            </div>
            { loadin && <Preloader/> }
            { checkedPotos() }
        </div>
    )
};

export default Photos;