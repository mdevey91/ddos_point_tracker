const express = require('express');
const router = express.Router();
const Point = require('../models/points');
const User = require('../models/user');


router.get('/tasks', (req, res, next) => {
    res.send('TASKS API!');
});

router.post('/add/point', (req, res, next) => {
    let newPoint = new Point({
        name: req.body.name,
    });
    Point.addPoint(newPoint, (err, data) => {
        if (err) {
            console.log('error: ', err);
            res.json({success: false, msg: 'Failed to add point'});
        }
        res.json({success: true, msg: 'successfully added point', data: data,})
    });
})

router.get('/get/all-points', (req, res, next) => {
    Point.find({}, (err, data) => {
        if (err) {
            console.log('error: ', err);
            res.json({success: false, msg: 'Failed to get points'});
        }
        res.send(data);
    });
})

router.get('/get/number-by-person', (req, res, next) => {
    Point.find({}, (err, data) => {
        if (err) {
            console.log('error: ', err);
            res.json({success: false, msg: 'Failed to get points'});
        }
        res.send(data);
    });
})

router.get('/get/points-by-person', (req, res, next) => {
    Point.getDistinctPoints((err, data) => {
        if (err) {
            console.log('error: ', err);
            res.sendStatus(500);
        }
        res.json(data)
    });
})

router.get('/get/points-by-name/:name', (req, res, next) => {
    Point.getPointsByName(req.params.name, (err, data) => {
        if (err) {
            console.log('error: ', err);
            res.sendStatus(500);
        }
        res.json(data);
    });
});

router.get('/get/points-by-id/:id', (req, res, next) => {
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

router.post('/add/user', (req, res, next) => {
    const newUser = new User({
        name: req.body.name,
    });
    User.addUser(newUser, (err, data) => {
        if (err) {
            res.json({success: false, msg: 'There was an error creating a user'});
        }
        res.json({success: true, msg: 'The user was successfully created'});
    });
})

router.get('/get/points-by-user', (req, res, next) => {
    console.log("called get points by user");
    var user_points = [];
    User.find({}, async (err, users) => {
        if (err) {
            res.json({success: false, msg: 'There was an error getting users'});
        }
        users.forEach((user) => {
            Point.count({name: user.name}, (err, data) => {
                if (err) {
                    res.json({success: false, msg: 'There was an error getting points'});
                }
                user_points.push({
                    points: data,
                    name: user.name,
                })
            });
        });
        return user_points;
    }).then(points => {res.json(points)});
})
module.exports = router;
