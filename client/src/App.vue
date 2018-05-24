<template>
  <div id="app" class="container">
    <h1>{{ team_name }} Points Board</h1>
    <div class="row">
        <Point
          v-for="point_obj in points"
          v-bind:point_obj="point_obj"
          v-bind:key="point_obj._id"
          class="col s5"/>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Point from './components/Point';
import api from './services/PointService';

export default {
  name: 'App',
  components: {
    Point
  },
  data () {
    return {
      points: [
        {
          _id: 1,
          name: 'matt',
          points: 2
        },
        {
          _id: 2,
          name: 'curtis',
          points: 1
        },
      ],
      team_name: 'DDoS Team',
    }
  },
  mounted () {
    this.getPoints();
  },
  methods: {
    async getPoints () {
      const response = await api.getPoints();
      debugger;
      this.points = response.data;
    },
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
