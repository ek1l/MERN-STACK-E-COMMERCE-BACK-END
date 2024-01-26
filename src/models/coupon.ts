import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  coupon: {
    type: String,
    required: [true, 'Please enter the Coupon Code'],
    unique: true,
  },
  amoung: {
    type: Number,
    required: [true, 'Please enter the Discount Amount'],
  },
});

export const Coupon = mongoose.model('Coupon', schema);
