import { getUserPoints, addPoint } from './api';
import toast from 'toastr';

var app = new Vue({
    el: '#points',
    data: {
        user_points: [],
    },
    mounted() {
        getUserPoints().then(res => {
            this.user_points = res;
        }).catch(error => {
            toast.error('We could not get user points', {autoClose: true});
        });
    },
});

Vue.component('user-point', {
    props: ['user_point'],
    data: function () {
      return {
        count: 0
      }
    },
    template: `
        <div>
            <h3> {{user_point.name}} </h3>
            <h1> {{user_point.points}} </h1>
        </div>
    `
  })