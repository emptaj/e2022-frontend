import React from "react";
import { useState } from "react";
import UserLinks from "../utils/MenuLinks/UserLinks.js";


import {
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Divider,
} from "@mui/material";

const Menu = ({ linksData }) => {
    const [menuLinks, setMenuLinks] = useState(linksData)
    return (
        <List>
            <Divider />
            {menuLinks.map((item) => {
                const { text, icon, linkTo } = item;
                return (
                    <ListItem button key={text} divider>
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