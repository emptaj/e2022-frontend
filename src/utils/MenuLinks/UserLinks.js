import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LoginIcon from '@mui/icons-material/Login';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';


export default [{
    text: 'Główna',
    icon: <HomeIcon />,
    linkTo: '/'
},
{
    text: 'Katalog',
    icon: <Inventory2Icon />,
    linkTo: '/products'
},
{
    text: 'Zamówienia',
    icon: <LocalGroceryStoreIcon />,
    linkTo: '/orders'
},
{
    text: 'Zaloguj',
    icon: <LoginIcon />,
    linkTo: '/login'
},
{
    text: 'Profil',
    icon: <ManageAccountsIcon />,
    linkTo: '/profile'
}
]