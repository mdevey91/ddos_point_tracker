import Api from '@/services/Api'

export default {
  addPoints(name) {
    return Api().post('/api/add/point', {
      'name': name
    });
  },
  getAllUsersPoints() {
    return Api().get('/api/get/points_by_person');
  },
  getUserPoints(name) {
    return Api().get(`/api/get/points_by_name/${name}`);
  },
}
