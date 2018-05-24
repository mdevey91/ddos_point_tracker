<template>
  <div id="app">
    <p>Is it working?</p>
    <Point
      v-for="point_obj in points"
      v-bind="point_obj"
      v-bind:key="point_obj._id"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Point from './components/Point'

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
              }
            ]
        }
    },
    mounted () {
        // this.getPoints()
    },
    methods: {
        async getPoints () {
            const response = await getPoints();
            this.points = response;
        },
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
