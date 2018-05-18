// import { getUserPoints, addPoint } from './api';
// import toast from 'toastr';
// const toast = require('toastr');


var app = new Vue({
    el: '#app',
    components: {
        toast: () => import('toastr'),
        getUserPoints: () => import('./api'),
    },
    data: {
        message: 'Hello, World!',
        user_points: [
        {
            _id: 1,
            name: "Curtis Jensen",
            points: 2,
        },
        {
            _id: 2,
            name: 'Matt Devey',
            points: 2,
        },
    ],
    },
    mounted() {
        console.log('was mounted!');
        // getUserPoints().then(res => {
        //     this.user_points = res;
        // }).catch(error => {
        //     // toast.error('We could not get user points', {autoClose: true});
        // });
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