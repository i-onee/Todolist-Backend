import router from './routers/activity.router.js';
import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const config = {
	compass 	: process.env.MONGODB_COMPASS,
	atlas 	: process.env.MONGODB_ATLAS,
	dbase		: process.env.DB_NAME,
	port		: process.env.PORT
};

mongoose.set('strictQuery', true)
mongoose.connect(`${config.atlas || config.compass}`, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
});

const dbase = mongoose.connection;
dbase.once('open', () => console.info('mongoose connected!!'));
dbase.on('error', error => console.error(error));

const app = express();

app.listen(config.port || 5000, () => console.info('server running at port 5000'));
app.use(express.json());
app.use(cors());
app.use(router);

