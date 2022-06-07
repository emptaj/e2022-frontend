import { Card, CardContent, Typography } from "@mui/material";
import GridItem from "@mui/material/Grid";
import React from "react";

export default function ChooseDelieveryTypeComponent( {id, name, email, addressId, setCartItems} ) {

    return(
        <GridItem md={4} xs={12}>
            <Card onClick={() => setCartItems(id)}>
                <CardContent>
                    <Typography gutterBottom>
                      {email}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography>
                        {id}
                    </Typography>
                </CardContent>
            </Card>
        </GridItem >
    )
}