import express from 'express';
import { adminOnly } from '../middlewares/auth.js';
import { newCoupon } from '../controllers/payment.js';

const app = express();

// route - /api/v1/payment/new

app.post('/coupon/new', newCoupon);

export default app;
