import { Server } from "socket.io";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 9000;

const io = new Server(PORT, {
  cors: {
    origin: process.env.FRONTEND_URL,
  },
});

let users = [];

const addUser = (userData, socketId) => {
  !users.some((user) => user.sub === userData.sub) &&
    users.push({ ...userData, socketId });
};

const getUser = (userId) => {
  return users.find((user) => user.sub === userId);
};

io.on("connection", (socket) => {
  // console.log("✅ User connected:", socket.id);

  socket.on("addUser", (userData) => {
    addUser(userData, socket.id);
    io.emit("getUsers", users);
    // console.log(" Users list:", users);
  });

  socket.on("sendMessage", (data) => {
    const user = getUser(data.receiverId);

    if (user) {
      io.to(user.socketId).emit("getMessage", data);
    } else {
      // console.warn("⚠️ Receiver not found in users list:", data.receiverId);
    }
  });
});
