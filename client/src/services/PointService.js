import Api from '@/services/Api'

export default {
  addPoints(name) {
    return Api().post('/api/add/point', {
      'name': name
    });
  },
  getAllUsersPoints() {
    return Api().get('/api/get/points-by-user');
  },
  getUserPoints(name) {
    return Api().get(`/api/get/points-by-name/${name}`);
  },
  getPoints() {
    return Api().get('/api/get/points');
  },
}
