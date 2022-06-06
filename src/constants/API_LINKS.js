const BASE_LINK = "http://localhost:8080/api"

export const STATIC_LINKS = {
    WAREHOUSES: BASE_LINK+"/warehouses",
    PRODUCTS: BASE_LINK+"/products",
    REGISTER: BASE_LINK+"/users"
}

export const API_LINK_WAREHOUSES_ID_PRODUCTS = (id) => BASE_LINK + "/warehouses/" + id + "/products";