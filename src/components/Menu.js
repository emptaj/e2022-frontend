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

    const hrefClass = {
        textDecoration: "none",
        color: "inherit"

    }

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
                        <a href={linkTo} style={hrefClass}><ListItemText primary={text} /> </a>
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