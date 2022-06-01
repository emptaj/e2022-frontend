import React from "react";

import WarehouseDetails from "../components/WarehouseDetails"
import WithListHOC from "../components/WithListHOC";

export default function Warehouses({API_LINK}) {
    const pageTitle = 'Warehouses';

    return (
        <WithListHOC WrappedComponent={WarehouseDetails} API_LINK={API_LINK} pageTitle={pageTitle} />
    )
}
