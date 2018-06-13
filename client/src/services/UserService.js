import Api from '@/services/Api'

export default {
  addUser(name) {
    return Api().post('/api/add/user', {
      'name': name
    });
  },
  getUsers() {
    return Api().get('api/get/users');
  }
}