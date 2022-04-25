import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import values from '../../../theme/values';

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: values.ITEM_HEIGHT * 4.5 + values.ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

const CustomSelect = ({ albumId, selectedId, setSelectedId }) => {
    const handleChange = ({target}) => {

        setSelectedId(target.value)
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 200 }}>
                <InputLabel id="albumId">
                    Choose album
                </InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={ selectedId }
                    onChange={ handleChange }
                    input={ <OutlinedInput label="Choose album" /> }
                    MenuProps={ MenuProps }
                >
                    {albumId.map((id) => (
                        <MenuItem
                            key={ id }
                            value={ id }
                        >
                            { id }
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export default CustomSelect;