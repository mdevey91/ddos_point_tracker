<template>
    
</template>

<script>
import { getPoints, addPoints } from '../services/PointService';
export default {
    props: [point_obj],
    name: 'Point',
    data () {
        return {
            points: []
        }
    },
    mounted () {
        this.getPoints()
    },
    methods: {
        async getPoints () {
            const response = await getPoints();
            this.points = response;
        },
        onClick () {
            //disable button with loading icon
            getPoints(point_obj.name).then(res => {
                point_obj.points++;
                //enable button
            }).catch(error => {
                //display error message
                //enable button
            })
        }
    }
}
</script>
