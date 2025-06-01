// import { Server } from "socket.io";
// import dotenv from "dotenv";
// dotenv.config();

// const PORT = process.env.PORT || 9000;

// const io = new Server(PORT, {
//   cors: {
//     origin: process.env.FRONTEND_URL,
//   },
// });

// let users = [];

// const addUser = (userData, socketId) => {
//   !users.some((user) => user.sub === userData.sub) &&
//     users.push({ ...userData, socketId });
// };

// const getUser = (userId) => {
//   return users.find((user) => user.sub === userId);
// };

// io.on("connection", (socket) => {
//   // console.log("✅ User connected:", socket.id);

//   socket.on("addUser", (userData) => {
//     addUser(userData, socket.id);
//     io.emit("getUsers", users);
//     // console.log(" Users list:", users);
//   });

//   socket.on("sendMessage", (data) => {
//     const user = getUser(data.receiverId);

//     if (user) {
//       io.to(user.socketId).emit("getMessage", data);
//     } else {
//       // console.warn("⚠️ Receiver not found in users list:", data.receiverId);
//     }
//   });
// });

import express from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const server = http.createServer(app); // 👈 Important: don't bind Socket.IO directly to a port

const PORT = process.env.PORT || 9000;

const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST"],
  },
});

// 🧠 In-memory store for connected users
let users = [];

const addUser = (userData, socketId) => {
  if (!users.some((user) => user.sub === userData.sub)) {
    users.push({ ...userData, socketId });
  }
};

const getUser = (userId) => {
  return users.find((user) => user.sub === userId);
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

io.on("connection", (socket) => {
  console.log("✅ User connected:", socket.id);

  socket.on("addUser", (userData) => {
    addUser(userData, socket.id);
    io.emit("getUsers", users);
  });

  socket.on("sendMessage", (data) => {
    const user = getUser(data.receiverId);
    if (user) {
      io.to(user.socketId).emit("getMessage", data);
    }
  });

  socket.on("disconnect", () => {
    console.log("❌ User disconnected:", socket.id);
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});

// ✅ Start the server correctly (Render will detect and route this)
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
