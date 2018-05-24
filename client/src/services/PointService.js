import Api from '@/services/Api'

export default {
  addPoints(name) {
    return Api().post('/api/add/points', {
      'name': name
    });
  },
  getPoints() {
    return Api().get('/api/get/number_by_person');
  }
}
