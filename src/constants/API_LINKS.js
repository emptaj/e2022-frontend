const BASE_LINK = "http://localhost:8080/api"

export const API_LINKS = {
    WAREHOUSES: BASE_LINK+"/warehouses",
    WAREHOUSES_ID_PRODUCTS: BASE_LINK+"/warehouses/:warehouseId/products",
    PRODUCTS: BASE_LINK+"/products",
    REGISTER: BASE_LINK+"/users"
}