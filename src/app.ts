import express  from 'express';
// Importing Routes
import userRouter from './routes/user.js';
import { connectDB } from './utils/features.js';
import { errorMiddleware } from './middlewares/error.js';

const port = 4000;

const app = express();
app.use(express.json());

app.get('/', (_, res) => {
  res.send('API Working with /api/v1');
});

// Using Routes

app.use('/api/v1/user', userRouter);
app.use(errorMiddleware);
connectDB();
app.listen(port, () => {
  console.log(`Express is working on http://localhost:${port}`);
});
