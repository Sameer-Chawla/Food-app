// models/Reservation.js
import mongoose from 'mongoose';

const ReservationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  datetime: { type: Date, required: true },
  message: { type: String },
}, { timestamps: true });

const Reservation = mongoose.model('Reservation', ReservationSchema);
export default Reservation; 
