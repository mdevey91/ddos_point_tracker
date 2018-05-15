const express = require('express');
const router = express.Router();
const Point = require('../models/points');


router.get('/tasks', (req, res, next) => {
    res.send('TASKS API!');
});

router.post('/add/point', (req, res, next) => {
    let newPoint = new Point({
        name: req.body.name,
        date: req.body.date,
    });
    Point.addPoint(newPoint, (err, data) => {
        if (err) {
            res.json({success: false, msg: 'Failed to add point'});
        }
        else {
            res.json({success: true, msg: 'successfully added point'})
        }
    });
})

router.get('/get/allpoints', (req, res, next) => {
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

router.get('/get/numberbyperson', (req, res, next) => {
    Point.find({}, (err, data) => {
        if (err) {
            res.json({success: false, msg: 'Failed to get points'});
        }
        else {
            res.send(data);
        }
    });
})

router.get('/get/pointsbyperson', (req, res, next) => {
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
module.exports = router;
