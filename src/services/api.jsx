import axios from 'axios';

axios.defaults.baseURL = 'https://63f0a62b5b7cf4107e23ed30.mockapi.io';

export const addMaterial = async values => {
    const response = await axios.post('/materials', values);
    return response.data;
};