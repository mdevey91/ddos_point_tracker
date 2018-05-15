import axios from 'axios';

const API_ROOT = '/api';

export function getUserPoints() {
    return axios.get(`${API_ROOT}/get/pointsbyperson`);
}

export function addPoint(name, date) {
    const newPoint = {
        name: name,
        date: date
    };
    return axios.post(`${API_ROOT}/add/point`, newPoint);
}