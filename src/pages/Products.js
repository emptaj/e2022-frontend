import React from "react";

import ProductDetails from "../components/ProductDetails"
import WithListHOC from "../components/WithListHOC";

export default function Products({API_LINK, setCartItems}) {
    const pageTitle = 'Products';

    return (
        <WithListHOC WrappedComponent={ProductDetails} API_LINK={API_LINK} pageTitle={pageTitle} setCartItems={setCartItems} />
    )
}
