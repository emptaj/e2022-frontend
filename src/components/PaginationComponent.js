import { Pagination } from "@mui/material";
import React from "react";

export default function PaginationComponent({setCurrentPage, pageCount}) {
    return(
        <Pagination count={pageCount} onChange={(_, value) => setCurrentPage(value)} color="primary" />
    );
}