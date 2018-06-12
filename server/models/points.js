const mongoose = require('mongoose');
const User = require('./user');

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

module.exports.getPointsById = (id, callback) => {
	console.log('getPointsById: ', id);
	// Point.findById(id, callback);
	const query = {
		_id: id
	};
	Point.find(query, callback);
}

module.exports.getPointsByName = (name, callback) => {
	const query = {
		name: name
	};
	Point.find(query, callback);
}

module.exports.addPoint = (newPoint, callback) => {
	newPoint.save(callback);
}

module.exports.getDistinctPoints = (callback) => {
	Point.aggregate([{
			$group: {
				_id: {
					name: '$name'
				},
				points: {
					$sum: 1
				},
			}
		},
		{
			$project: {
				_id: 0,
				name: '$_id.name',
				points: 1,
			}
		},
	], callback)
}

module.exports.getPointsByUser = () => {
	User.find({}, (err, users) => {
		let user_points = [];
		users.forEach((user) => {
			Point.count({name: user.name}, (err, data) =>{
				console.log(data);
			}) 
		})
	})
}