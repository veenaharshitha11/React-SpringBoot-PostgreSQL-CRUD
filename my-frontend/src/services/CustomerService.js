import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8085/api/v1/customers';

// export const listCustomers = () => {
//     return axios.get(REST_API_BASE_URL);
// }

export const listCustomers = () => axios.get(REST_API_BASE_URL);

export const createCustomer = (customer) => axios.post(REST_API_BASE_URL, customer);

export const getCustomer = (customerId) => axios.get(REST_API_BASE_URL + '/' + customerId);

export const updateCustomer = (customerId, customer) => axios.put(REST_API_BASE_URL + '/' + customerId, customer);

export const deleteCustomer = (customerId) => axios.delete(REST_API_BASE_URL + '/' + customerId);