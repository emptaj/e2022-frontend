import React from "react";
import { useState } from "react";
import UserLinks from "../utils/MenuLinks/UserLinks.js";


import {
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
} from "@mui/material";

const Menu = ({ linksData }) => {
    const [menuLinks, setMenuLinks] = useState(linksData)
    return (
        <List>
            {menuLinks.map((item) => {
                const { text, icon, linkTo } = item;
                return (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {icon && icon}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                )

            })}
        </List>
    )
}

Menu.defaultProps = {
    linksData: UserLinks
}
export default Menu;