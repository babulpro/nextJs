// models/Teacher.js

import mongoose from 'mongoose';

// Define the Teacher schema
const TeacherSchema = new mongoose.Schema(
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
    },
    facebook: {
      type: String,
      trim: true,
    },
    linkedin: { // Corrected from 'linkdin' to 'linkedin'
      type: String,
      trim: true,
    },
    twitter: {
      type: String,
      trim: true,
    },
    fImg: { // Facebook icon image
      type: String,
      trim: true,
    },
    lImg: { // LinkedIn icon image
      type: String,
      trim: true,
    },
    tImg: { // Twitter icon image
      type: String,
      trim: true,
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

 
export default mongoose.models.Teacher || mongoose.model('Teacher', TeacherSchema);
