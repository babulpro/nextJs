import mongoose from 'mongoose';

const navSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    } ,
    url:{
        type:String,
        required:true
    }
});

 

 
export default mongoose.models.navData || mongoose.model('navData', navSchema);