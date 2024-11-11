import mongoose from 'mongoose';



const AboutDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    shortDes: {
        type: String,
        required: true,
        trim: true
    }
});

export default mongoose.models.AboutData || mongoose.model('AboutData', AboutDataSchema);

 
 