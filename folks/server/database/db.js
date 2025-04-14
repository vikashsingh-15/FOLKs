const mongoose = require("mongoose");

const Connection = async () => {
  const URL =
    "mongodb+srv://admin:admin@cluster0.blvrw93.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Cluster0";
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

module.exports = Connection;
