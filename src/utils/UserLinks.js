import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LoginIcon from '@mui/icons-material/Login';



export default [
    {
        text: 'Główna',
        icon: <HomeIcon />,
        linkTo: '/'
    },
    {
        text: 'Katalog',
        icon: <Inventory2Icon />,
        linkTo: '/'
    },
    {
        text: 'Zaloguj',
        icon: <LoginIcon />,
        linkTo: '/'
    },
]