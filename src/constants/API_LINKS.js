const HOST = "http://localhost:8080"
const BASE_LINK = HOST + "/api"

export const STATIC_LINKS = {
    WAREHOUSES: BASE_LINK + "/warehouses",
    PRODUCTS: BASE_LINK + "/products",
    REGISTER: BASE_LINK + "/users",
    CREATE_ORDER: BASE_LINK + "/orders",
    DELIVERY_TYPES: BASE_LINK + "/delivery-types",
    LOGIN: HOST + "/login"
}

export const API_LINK_WAREHOUSES_ID_PRODUCTS = (warehouseId) => `${BASE_LINK}/warehouses/${warehouseId}/products`;

export const API_LINK_USERS_ORDERS = (userId) => `${BASE_LINK}/users/${userId}/orders/`;

export const API_LINK_ADDRESS_ID = (addressId) => `${BASE_LINK}/addresses/${addressId}`;