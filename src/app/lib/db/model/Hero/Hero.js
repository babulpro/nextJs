import mongoose from 'mongoose';

const heroSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    surName: {
        type: String,
        required: true,
    },
    firstPara: {
        type: String,
        required: true,
    },
    secondPara: {
        type: String,
        required: true,
    },
    thirdPara: {
        type: String,
        required: true,
    },
});

 

 
export default mongoose.models.HeroData || mongoose.model('HeroData', heroSchema);
 
