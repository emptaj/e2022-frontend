import { Box, Button, TextField } from '@mui/material';
import React from 'react';

export default function CreateAddressComponent( {address, setAddress} ) { 
    
    const handleChange = (event) => {
        const { value, name } = event.target;

        setAddress((prevData) => {
            return { 
            ...prevData,
            [name]: value
            }
        })
  }

    return(
        <Box sx={{ mt: 1 }}>
            <TextField sx={{ width: '51%' }}
                autoFocus
                required
                id="country"
                name="country"
                label="country"
                value={address.country}
                onChange={event => handleChange(event)}
                margin="normal"
            />
            <TextField sx={{ width: '51%' }}
                required
                id="city"
                name="city"
                label="city"
                value={address.city}
                onChange={event => handleChange(event)}
                margin="normal"
            />
            <TextField sx={{ width: '51%' }}
                required
                id="postalCode"
                name="postalCode"
                label="postalCode"
                value={address.postalCode}
                onChange={event => handleChange(event)}
                margin="normal"
            />
            <TextField sx={{ width: '51%' }}
                required
                id="street"
                name="street"
                label="street"
                value={address.street}
                onChange={event => handleChange(event)}
                margin="normal"
            />
            <TextField sx={{ width: '51%' }}
                required
                id="houseNum"
                name="houseNum"
                label="houseNum"
                value={address.houseNum}
                onChange={event => handleChange(event)}
                margin="normal"
            />
            <TextField sx={{ width: '51%' }}
                required
                id="flatNum"
                name="flatNum"
                label="flatNum"
                value={address.flatNum}
                onChange={event => handleChange(event)}
                margin="normal"
            />
            <TextField sx={{ width: '51%' }}
                required
                id="phone"
                name="phone"
                label="phone"
                value={address.phone}
                onChange={event => handleChange(event)}
                margin="normal"
            />
        </Box>
    );
}