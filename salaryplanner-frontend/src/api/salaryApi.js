import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/salaries/';

export const getSalaries = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addSalary = async (salaryData) => {
    const response = await axios.post(API_URL, salaryData);
    return response.data;
};
