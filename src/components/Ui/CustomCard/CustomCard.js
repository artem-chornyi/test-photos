import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@mui/styles";
import CustomButton from '../CustomButton';
import styles from './styles';

const useStyles = makeStyles(styles);

const CustomCard = ({ photo, handleOpen, handleRemove }) => {
    const classes = useStyles();

    const {
        id,
        thumbnailUrl,
        title,
    } = photo;

    const onClick = () => {
        handleRemove(id)
    }

    return (
        <>
            <Card className={ classes.card } >
                <CardHeader
                    title={`Photo ${ id }`}
                />
                <CardMedia
                    component="img"
                    sx={ styles().photo }
                    onClick={ () => handleOpen(photo) }
                    height="150"
                    src={ thumbnailUrl }
                    alt={ title }
                />
                <CardContent className={ classes.cardContent }>
                    <Typography variant="body2" color="text.secondary">
                        { title }
                    </Typography>
                    <CustomButton
                        value="Delete"
                        onClick={ onClick }
                    />
                </CardContent>
            </Card>
        </>
    )
};

export default CustomCard;