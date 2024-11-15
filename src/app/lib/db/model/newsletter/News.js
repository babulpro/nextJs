import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.News || mongoose.model('News',newsSchema);

