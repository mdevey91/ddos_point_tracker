<template>
  <div id="app" class="container">
    <h1>{{ team_name }} Points Board</h1>
    <div class="row">
      <form v-on:submit="createNewUser($event)" method="POST">
        <div class="col s12 m8 l6">
          <label for="fullname">Name:</label>
          <input id="fullname" name="name" type="text"/>
        </div>
        <button type="submit" class="btn waves-effect waves-light btn-medium">Add User</button>
      </form>
    </div>
    <div class="row">
      <table class="striped responsive-table">
        <thead>
        <tr>
          <th>User</th>
          <th>Points</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
          <tr
            class="user"
            v-for="user in users"
            v-bind:user="user"
            v-bind:key="user.id"
          >
            <td>{{ user.name }}</td>
            <td>{{ user.points.length }}</td>
            <td>
              <button
                class="btn-floating btn-small waves-effect waves-light red"
                v-on:click="addPoint($event, user.id, user.name)"
              ><i class="material-icons">add</i></button>
              <button
                class="btn-floating btn-small waves-effect waves-light red"
                v-on:click="removePoint($event, user.id, user.name)"
              ><i class="material-icons">remove</i></button>
              <button
                class="btn-floating btn-small waves-effect waves-light red"
                v-on:click="deleteUser($event, user.id, user.name)"
              ><i class="material-icons">delete</i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// import AddUser from './components/AddUser';
import api from '../services/PointService';

export default {
  name: 'ManageUsers',
//   components: {
//     AddUser
//   },
  data () {
    return {
      users: [
          {
            name: 'curtis jensen',
            id: '5af7859a26e32972ded3fb81',
            points: [
              {
                "_id":"5af7859a26e32972ded3fb81",
                "name":"curtis jensen",
                "date":"2018-05-13T00:23:54.118Z",
                "__v":0
              },
              {
                "_id":"5af7859a26e32972ded3fb81",
                "name":"curtis jensen",
                "date":"2018-05-13T00:23:54.118Z",
                "__v":0
              },
            ]
          },
          {
            name: 'matt devey',
            id: '5af783fb8b0b78723b0d00a2',
            points: [
              {
                "_id":"5af783fb8b0b78723b0d00a2",
                "name":"matt devey",
                "date":"2018-05-13T00:16:59.879Z",
                "__v":0
              },
              {
                "_id":"5af783fb8b0b78723b0d00a2",
                "name":"matt devey",
                "date":"2018-05-13T00:16:59.879Z",
                "__v":0
              }
            ],
          },
      ],
      team_name: 'DDoS Team',
    }
  },
  mounted () {
    this.getPoints();
  },
  methods: {
    async getPoints() {
      // console.log('get points was called');
      // const response = await api.getPoints();
      // this.points = response.data;
      // console.log(this.points);
    },
    createNewUser (event) {
      // Adds new user
      // POST
      event.preventDefault();
      console.log('createNewUser clicked');
    },
    addPoint () {
      // Adds new point entry with date and positive point value.
      // POST
      event.preventDefault();
      const user = event.target.closest('.user').getAttribute('data-user');
    },
    removePoint () {
      // Adds new point entry with date and negative point value.
      // POST
      event.preventDefault();
      const user = event.target.closest('.user').getAttribute('data-user');
    },
    deleteUser (event, userId, userName) {
      // Delete user and point entries.
      // DELETE
      event.preventDefault();
      // const user = event.target.closest('.user');
      // const userName = user.getAttribute('data-user');
      // const userId = user.getAttribute('data-id');

      if(confirm(`Are you sure you want to delete "${userName}"?`)) {
        console.log('confirmed');
      }
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
