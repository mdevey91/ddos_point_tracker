<template>
    <div class="card">
        <div class="card-content">
            <h3 class="name">{{ point_obj.name }}</h3>
            <span class="points">{{ point_obj.points }}</span>
            <button
                v-on:click="addPoint($event, point_obj.name)"
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
        addPoint (event, name) {
            //disable button with loading icon
            event.preventDefault();
            const button = event.target.parentElement;

            button.setAttribute('disabled', 'true');
            api.addPoints(name).then(res => {
                console.log("add points was called");
                this.point_obj.points++;
                //enable button
                button.removeAttribute('disabled');
            }).catch(error => {
                toast.error('There was an error adding a point')
                //enable button
                button.removeAttribute('disabled');
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

