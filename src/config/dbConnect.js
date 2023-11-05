// import mongoose to handle mongodb connection
import mongoose from 'mongoose';

// need to export an async foo so it can be excecuted on each api_endpoint
// apparently should be the same way if PostgreSQL
export const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('mongo_db connection succesfull')
    } catch (err) {
        console.log('mongo_db connection failed')
        console.log(err)
    }
}

