import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import {
    PhotoList,
    Preloader
} from '../../components';
import {
    CustomButton,
    CustomInput,
    CustomPagination,
    CustomModal
} from '../../components/Ui'

import values from '../../theme/values';
import { getPhotos } from '../../api/api'
import styles from './styles';

const useStyles = makeStyles(styles);


const Photos = () => {
    const classes = useStyles();
    const [pages, setPages] = useState(values.START_PAGE);
    const [photos, setPhotos] = useState([]);
    const [count, setCount] = useState(0);
    const [loadin, setLoading] = useState(false);
    const [open, setOpen] = useState(true);

    useEffect(() => {
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
                console.log(err, 'err')
            })
            .finally(() => {
                setLoading(false);
            })
    }, [pages])

    const handlerPagination = (event, value) => {
        console.log(value, 'test');

        setPages(value);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const checkedPotos = () => (
        <div className={ classes.content }>
            {photos && (
                <PhotoList
                    photos={ photos }
                />
            )}
            {count > 0 && (
               <div className={ classes.pagination }>
                    <CustomPagination
                        count={ count }
                        onChange={ handlerPagination }
                    />
               </div>
            )}
        </div>
    )

    return (
        <div>
            { loadin && <Preloader/> }
            { checkedPotos() }
        </div>
    )
};

export default Photos;