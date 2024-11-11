 

import mongoose from 'mongoose';
 
const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    img: {
      type: String,
      required: true,
      trim: true,
    },
    des: {
      type: String,
      required: true,
      trim: true,
    
  }}
);

 
export default mongoose.models.course || mongoose.model('course', courseSchema);
