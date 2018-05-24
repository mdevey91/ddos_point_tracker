import Api from '@/services/Api'

export default {
  addPoints(name) {
    return Api().post('/api/add/point', {
      'name': name
    });
  },
  getPoints() {
    return Api().get('/api/get/points_by_person');
  }
}
