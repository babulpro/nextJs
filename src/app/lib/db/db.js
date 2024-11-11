 
import mongoose from 'mongoose';

const MONGODB_URI ='mongodb+srv://babul:babul1946@cluster0.97nea.mongodb.net/babul?retryWrites=true&w=majority' ||'mongodb+srv://babul:babul1946@cluster0.97nea.mongodb.net/';

async function dbConnect() {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  console.log("database is connected babul babul")
  return mongoose.connect(MONGODB_URI);
}

export default dbConnect;










// import mongoose from "mongoose";
// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://babul1946:mongoDb:kVf5jmvEhaQx5k0c@practice.n2ruz.mongodb.net/babul';

// async function dbConnect() {
//   if (mongoose.connection.readyState === 1) {
//     return;
//   }

//   return mongoose.connect(MONGODB_URI, {
//     connectTimeoutMS: 30000,  // Increase timeout to 30 seconds
//     socketTimeoutMS: 45000,   // Increase socket timeout to 45 seconds
//   })
//   .then(() => console.log('MongoDB connected!'))
//   .catch(err => console.error('Connection failed:', err));
// }

// export default dbConnect;
