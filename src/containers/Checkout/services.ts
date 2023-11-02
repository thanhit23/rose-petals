import axios from 'axios';

const BASE_URL = 'https://vapi.vnappmob.com/api';

export const getAddress = (endpoint: string) => axios.get(`${BASE_URL}${endpoint}`);
