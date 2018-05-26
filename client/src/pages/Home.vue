<template>
  <div id="app" class="container">
    <h1>{{ team_name }}<br/>Points Board</h1>
    <div class="row">
      <div
        class="col s12 m4 l3"
        v-for="point_obj in points"
        v-bind:key="point_obj._id">
        <Point v-bind:point_obj="point_obj" />
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld';
import Point from '../components/Point';
import api from '../services/PointService';

export default {
  name: 'App',
  components: {
    Point
  },
  data () {
    return {
      points: [],
      team_name: 'DDoS Team',
    }
  },
  mounted () {
    this.getAllUsersPoints();
  },
  methods: {
    async getAllUsersPoints() {
      console.log('get points was called');
      const response = await api.getAllUsersPoints();
      this.points = this.sortPoints(response.data);
      console.log(this.points);
    },
    sortPoints(users) {
      return users.sort((a,b) =>
          a.points - b.points);
    }
  }
}
</script>

<style>
body {
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1em;
}
h1 {
  font-weight: 200;
  font-size: 5em;
}
h2 {
  font-weight: 200;
  font-size: 4em;
}
h3 {
  font-weight: 300;
  font-size: 3em;
}
</style>
