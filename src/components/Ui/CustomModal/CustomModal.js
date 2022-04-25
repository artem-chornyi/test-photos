import React, { useState } from "react";
import Modal from '@mui/material/Modal';
import { makeStyles } from "@mui/styles";
import styles from "./styles";

const useStyles = makeStyles(styles);



const CustomModal = ({ open, handleClose, photo, }) => {
    const {
        title,
        url
    } = photo;
    const classes = useStyles();

    return (
        <Modal
            open={ open }
            onClose={ handleClose }
        >
            <div className={ classes.imgBox }>
                <img
                    src={ url }
                    alt={ title }
                />
            </div>
        </Modal>
    )
}

export default CustomModal;