import grid from "gridfs-stream";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const url = process.env.BASE_URL || "http://localhost:8000";

const conn = mongoose.connection;
let gfs, gridFsBucket;

conn.once("open", () => {
  gridFsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "photos",
  });

  gfs = grid(conn.db, mongoose.mongo);
  gfs.collection("photos");
});

export const uploadFile = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const imageUrl = `${url}/file/${req.file.filename}`;
  return res.status(200).json({ imageUrl });
};

export const getImage = async (req, res) => {
  try {
    const file = await gfs.files.findOne({ filename: req.params.filename });

    const readStream = gridFsBucket.openDownloadStream(file._id);
    readStream.pipe(res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
