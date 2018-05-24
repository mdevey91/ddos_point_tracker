const mongoose = require('mongoose');

const pointSchema = mongoose.Schema({
    name: {
        required: true,
        type: String,
        lowercase: true // Always converts to lowercase
    },
    date: { 
        type: Date, 
        default: Date.now
    },

})

const Point = module.exports = mongoose.model('Point', pointSchema);

module.exports.getPointById = (id, callback) => {
    Point.findById(id, callback);
}

module.exports.getPointByName = (name, callback) => {
    const query = {name: name};
    Point.find(query, callback);
}

module.exports.addPoint = (newPoint, callback) => {
    newPoint.save(callback);
}

module.exports.getDistinctPoints = (callback) => {
    Point.aggregate([
        { $group: {
            _id: { name: '$name' },
            points: {$sum: 1},
        }},
        { $project: {
            _id: 0,
            name: '$_id.name',
            points: 1,
        }},
    ], callback)
}
