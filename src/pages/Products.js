import React from "react";

import ProductDetails from "../components/ProductDetails"
import WithListHOC from "../components/WithListHOC";

export default function Products() {
    const pageTitle = 'Products';
    const API_LINK = 'http://localhost:8080/api/products'

    return (
        <WithListHOC WrappedComponent={ProductDetails} API_LINK={API_LINK} pageTitle={pageTitle} />
    )
}
