import express from 'express';
import {
	getActivityByID,
	updateOneActivity,
	deleteActivity,
	createActivity,
	getActivity,
} from '../controllers/activity.control.js';

const router = express.Router();

router.delete('/activity/:id', deleteActivity);
router.patch('/activity/:id', updateOneActivity);
router.get('/activity/:id', getActivityByID);
router.post('/activity', createActivity);
router.get('/activity', getActivity);

export default router;