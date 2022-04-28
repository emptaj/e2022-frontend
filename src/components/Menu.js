import React from "react";
import { useState } from "react";
import UserLinks from "../utils/UserLinks.js";

import {
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
} from "@mui/material";

const Menu = (props) => {
    const [menuLinks, setMenuLinks] = useState(props.linksData)
    return (
        <List>
            {menuLinks.map((item, index) => {
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