import api from './Api';

export function getPoints() {
    api.get('/api/get/number_by_person');
}

export function addPoints(name) {
    api.post('/api/add/points', {name: name});
}