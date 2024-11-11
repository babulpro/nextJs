import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: {
    city: { type: String, default: '' },
    mobile: { type: String, default: '' },
    street: { type: String, default: '' },
    post: { type: String, default: '' },
  
  },
  roles: { type: String, enum: ['admin', 'user'], default: 'user' },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

export default mongoose.models.User || mongoose.model('User', userSchema);


