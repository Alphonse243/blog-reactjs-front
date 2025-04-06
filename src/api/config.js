export const API_ENDPOINTS = {
    AUTH: {
        LOGIN: '/login',
        REGISTER: '/register',
        LOGOUT: '/logout'
    },
    USERS: {
        GET_ALL: '/users',
        GET_ONE: (id) => `/users/${id}`,
        UPDATE: (id) => `/users/${id}`,
        DELETE: (id) => `/users/${id}`
    }
};
