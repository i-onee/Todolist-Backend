import Activty from '../models/activity.model.js';

const getActivity = async (req, res) => {
	try {
		const activity = await Activty.find();
		res.json(activity)
	} catch (error) {
		res.status(500).json({ message: error.message });
	};
};

const getActivityByID = async (req, res) => {
	try {
		const activity = await Activty.findById(req.params.id);
		res.json(activity);
	} catch (error) {
		res.status(400).json({ message: error.message });
	};
};

const createActivity = async (req, res) => {
	const list = new Activty(req.body);
	try {
		const activity = await list.save();
		res.status(201).json(activity);
	} catch (error) {
		res.status(400).json({ message: error.message });
	};
};

const updateActivity = async (req, res) => {
	try {
		const activity = await Activty.updateOne({ _id: req.params.id }, { $set: req.body });
		res.status(200).json(activity);
	} catch (error) {
		res.status(400).json({ message: error.message }); 
	};
};

const deleteActivity = async (req, res) => {
	try {
		const activity = await Activty.deleteOne({ _id: req.params.id });
		res.status(200).json(activity);
	} catch (error) {
		res.status(400).json({ message: error.message });
	};
};

export { getActivity, getActivityByID, createActivity, updateActivity, deleteActivity }; 