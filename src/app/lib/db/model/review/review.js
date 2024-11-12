import mongoose from 'mongoose';

 

const reviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    des: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: String,
        required: true,
        trim: true
    }
});
 

 
export default mongoose.models.Review || mongoose.model('Review',reviewSchema);