<template>
    <div class="card">
        <div class="card-content">
            <h3 class="name">{{ point_obj.name }}</h3>
            <span class="points">{{ point_obj.points }}</span>
            <button
                v-on:click="addPoint(point_obj.name)"
                class="btn-floating btn-large waves-effect waves-light red"
            ><i class="material-icons">add</i></button>
        </div>
    </div>
</template>

<script>
import api from '../services/PointService';
import toast from 'toastr';
export default {
    name: 'Point',
    props: ['point_obj'],
    methods: {
        addPoint (name) {
            //disable button with loading icon
            api.addPoints(name).then(res => {
                console.log("add points was called");
                this.point_obj.points++;
                //enable button
            }).catch(error => {
                toast.error('There was an error adding a point')
                //enable button
            })
        }
    }
}
</script>

<style>
.card {
  /* margin-left: 10px;
  margin-right: 10px; */
}
.card .name {
  /* font-weight: 200;
  font-size: 3em; */
}
.card .points {
  display: block;
  font-weight: 600;
  font-size: 5em;
}
</style>

