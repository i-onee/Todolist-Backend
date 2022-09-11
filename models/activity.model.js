import mongoose from 'mongoose';

const Activity = mongoose.Schema({

	title: {
		type: String,
		require: true,
	},

	notes: {
		type: String,
		require: true,
	},

	complete: {
		type: Boolean,
		default: false,
	}

}, { collection: `${process.env.DB_COLLECTION}` });

export default mongoose.model('Activity', Activity);