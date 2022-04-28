import React from "react";
import UserLinks from "./UserLinks";
import GroupIcon from '@mui/icons-material/Group';
import AppsIcon from '@mui/icons-material/Apps';

export default [...UserLinks, {
    text: 'Użytkownicy',
    icon: <GroupIcon />,
    linkTo: '/'
},
{
    text: 'Zarządzaj',
    icon: <AppsIcon />,
    linkTo: '/'
},]