import mongoose from 'mongoose' 
import dotenv from 'dotenv';

dotenv.config();
const Activity = mongoose.Schema({

	title: {
		type: String,
		default: '...',
		require: true,
	},

	notes: {
		type: String,
		default: '...',
		require: true,
	},

	complete: {
		type: Boolean,
		default: false,
	}

}, { collection: `${process.env.DB_COLLECTION}` });

export default mongoose.model('Activity', Activity);
