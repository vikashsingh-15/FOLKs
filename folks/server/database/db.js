import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const UserName = process.env.DB_USERNAME;
const Password = process.env.DB_PASSWORD;

const Connection = async () => {
  const URL = `mongodb+srv://${UserName}:${Password}@cluster0.blvrw93.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
};

export default Connection;
