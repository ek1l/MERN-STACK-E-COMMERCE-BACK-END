import express from 'express';
import { connectDB } from './utils/features.js';
import { errorMiddleware } from './middlewares/error.js';
import NodeCache from 'node-cache';
import { config } from 'dotenv';
import morgan from 'morgan';
// Importing Routes
import userRouter from './routes/user.js';
import productRoute from './routes/products.js';
import orderRoute from './routes/order.js';

config({
  path: './.env',
});

const port = process.env.PORT || 4000;
const mongoURI = process.env.MONGO_URI || '';
connectDB(mongoURI);
export const myCache = new NodeCache();
const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.get('/', (_, res) => {
  res.send('API Working with /api/v1');
});

// Using Routes

app.use('/api/v1/user', userRouter);
app.use('/api/v1/product', productRoute);
app.use('/api/v1/order', orderRoute);
app.use('/uploads', express.static('uploads'));
app.use(errorMiddleware);
app.listen(port, () => {
  console.log(`Express is working on http://localhost:${port}`);
});
