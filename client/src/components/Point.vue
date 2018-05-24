<template>
    <div>
        <h1>{{ point_obj.name }}</h1>
        <h1>{{ point_obj.points }}</h1>
        <button v-on:click="addPoint(point_obj.name)">Add Point</button>
    </div>
</template>

<script>
import { getPoints, addPoints } from '../services/PointService';
import toast from 'toastr';
export default {
    name: 'Point',
    props: ['point_obj'],
    methods: {
        addPoint () {
            //disable button with loading icon
            addPoints(name).then(res => {
                point_obj.points++;
                //enable button
            }).catch(error => {
                toast.error('There was an error adding a point')
                //enable button
            })
        }
    }
}
</script>
