import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import dotenv from "dotenv";
dotenv.config();

const UserName = process.env.DB_USERNAME;
const Password = process.env.DB_PASSWORD;

// const storage = new GridFsStorage({
//   url: `mongodb+srv://${UserName}:${Password}@cluster0.blvrw93.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
//   options: {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   file: (req, file) => {
//     const match = ["image/png", "image/jpg", "image/jpeg"];

//     if (match.indexOf(file.mimetype) === -1) {
//       return `${Date.now()}-file-${file.originalname}`;
//     }

//     return {
//       bucketName: "photos",
//       filename: `${Date.now()}-file-${file.originalname}`,
//     };
//   },
// });

// export default multer({ storage });

const storage = new GridFsStorage({
  url: `mongodb+srv://${UserName}:${Password}@cluster0.blvrw93.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  file: (req, file) => {
    const isImage = ["image/png", "image/jpg", "image/jpeg"].includes(
      file.mimetype
    );

    return {
      bucketName: "photos", // ✅ Force everything into the same bucket
      filename: `${Date.now()}-file-${file.originalname}`,
    };
  },
});

export default multer({ storage });
