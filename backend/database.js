import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DATABASE CONNECTED");
  } catch (e) {
    console.log("DB Error:", e.message);
  }
};

export default connectDb;
