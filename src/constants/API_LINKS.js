const BASE_LINK = "http://localhost:8080"
const API = "/api"

export const STATIC_LINKS = {
    WAREHOUSES: `${BASE_LINK}${API}/warehouses`,
    PRODUCTS: `${BASE_LINK}${API}/products`,
    REGISTER: `${BASE_LINK}${API}/users`,
    CREATE_ORDER: `${BASE_LINK}${API}/orders`,
    DELIVERY_TYPES: `${BASE_LINK}${API}/delivery-types`,
    LOGIN: `${BASE_LINK}/login`,
    REFRESH_TOKEN: `${BASE_LINK}${API}/token/refresh`
}

export const API_LINK_WAREHOUSES_ID_PRODUCTS = warehouseId => `${BASE_LINK}${API}/warehouses/${warehouseId}/products`;

export const API_LINK_USERS_ORDERS = userId => `${BASE_LINK}${API}/users/${userId}/orders/`;

export const API_LINK_ORDER_ID = (orderId) => `${BASE_LINK}${API}/orders/${orderId}`;

export const API_LINK_ADDRESS_ID = addressId => `${BASE_LINK}${API}/addresses/${addressId}`;

export const API_LINK_PRODUCT_ID = productId => `${BASE_LINK}${API}/products/${productId}`;