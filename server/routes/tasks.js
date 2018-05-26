const express = require('express');
const router = express.Router();
const Point = require('../models/points');


router.get('/tasks', (req, res, next) => {
    res.send('TASKS API!');
});

router.post('/add/point', (req, res, next) => {
    let newPoint = new Point({
        name: req.body.name,
    });
    Point.addPoint(newPoint, (err, data) => {
        if (err) {
            res.json({success: false, msg: 'Failed to add point'});
        }
        else {
            res.json({success: true, msg: 'successfully added point', data: data,})
        }
    });
})

router.get('/get/all_points', (req, res, next) => {
    Point.find({}, (err, data) => {
        if (err) {
            res.json({success: false, msg: 'Failed to get points'});
        }
        else {
            console.log(data);
            console.log('fjsdlfjlsdjflsdjflsdkjf');
            for (let i = 0; i < data.length; i++){
                console.log(data[i]);
                console.log(data[i].name);
            }
            res.send(data);
        }
    });
})

router.get('/get/number_by_person', (req, res, next) => {
    Point.find({}, (err, data) => {
        if (err) {
            res.json({success: false, msg: 'Failed to get points'});
        }
        else {
            res.send(data);
        }
    });
})

router.get('/get/points_by_person', (req, res, next) => {
    Point.getDistinctPoints((err, data) => {
        if (err) {
            console.log('error: ', err);
            res.sendStatus(500);
        }
        else {
            res.json(data)
        }
    });
})

router.get('/get/points_by_name/:name', (req, res, next) => {
    Point.getPointsByName(req.params.name, (err, data) => {
        if (err) {
            console.log('error: ', err);
            res.sendStatus(500);
        } else {
            res.json(data);
        }
    });
});

router.get('/get/points_by_id/:id', (req, res, next) => {
    Point.getPointsById(req.params.id, (err, data) => {
        if (err) {
            console.log('error: ', err);
            res.sendStatus(500);
        }
        else {
            res.json(res);
        }
    });
});
module.exports = router;
