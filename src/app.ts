import express from 'express';
import { connectDB } from './utils/features.js';
import { errorMiddleware } from './middlewares/error.js';
// Importing Routes
import userRouter from './routes/user.js';
import productRoute from './routes/products.js';
import NodeCache from 'node-cache';
const port = 4000;
connectDB();
export const myCache = new NodeCache();
const app = express();
app.use(express.json());

app.get('/', (_, res) => {
  res.send('API Working with /api/v1');
});

// Using Routes

app.use('/api/v1/user', userRouter);
app.use('/api/v1/product', productRoute);
app.use('/uploads', express.static('uploads'));
app.use(errorMiddleware);
app.listen(port, () => {
  console.log(`Express is working on http://localhost:${port}`);
});
