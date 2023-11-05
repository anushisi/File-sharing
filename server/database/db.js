import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {
  const MONODB_URL = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-rfxvmql-shard-00-00.vxatgyo.mongodb.net:27017,ac-rfxvmql-shard-00-01.vxatgyo.mongodb.net:27017,ac-rfxvmql-shard-00-02.vxatgyo.mongodb.net:27017/?ssl=true&replicaSet=atlas-qh4ycv-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(MONODB_URL,{useNewUrlParser: true});
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Error while connecting with the database',error.message);
  }
}

export default DBConnection;