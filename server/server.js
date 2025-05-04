import express, { json } from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import Reservation from './modal/reservations-modal.js'; 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(json());

connect('mongodb://localhost:27017/tastybites', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB error:', err));

app.post('/api/reservations', async (req, res) => {
  try {
    const reservation = new Reservation(req.body);
    await reservation.save();
    res.status(201).json({ message: 'Reservation saved!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
