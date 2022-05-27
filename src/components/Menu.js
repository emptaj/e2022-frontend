import React from "react";
import { useState } from "react";
import UserLinks from "../utils/MenuLinks/UserLinks.js";
import { useNavigate } from "react-router-dom";


import {
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Divider,
} from "@mui/material";

const Menu = ({ linksData }) => {
    const [menuLinks, setMenuLinks] = useState(linksData)
    let navigate = useNavigate()

    return (
        <List>
            <Divider />
            {menuLinks.map((item) => {
                const { text, icon, linkTo } = item;
                return (
                    <ListItem button divider
                        key={text}
                        onClick={() => navigate(linkTo)}>
                        <ListItemIcon>
                            {icon && icon}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                )

            })}
        </List >
    )
}

Menu.defaultProps = {
    linksData: UserLinks
}
export default Menu;