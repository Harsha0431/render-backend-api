
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	uniqueId: {
		type: String,
		required: true,
        unique: true,
	},
	url: {
		type: String,
		required: true,
		unique: true,
	},
	name:{
		type: String,
		required: true,
		unique: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});
const User = mongoose.model('UserFileInfo', UserSchema);
module.exports = User ;