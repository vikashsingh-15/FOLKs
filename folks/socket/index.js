import { Server } from "socket.io";

const io = new Server(9000, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let users = [];

const addUser = (userData, socketId) => {
  // ✅ Corrected variable name from "user" to "users"
  !users.some((user) => user.sub === userData.sub) &&
    users.push({ ...userData, socketId });
};

const getUser = (userId) => {
  return users.find((user) => user.sub === userId);
};

io.on("connection", (socket) => {
  console.log("✅ User connected:", socket.id);

  socket.on("addUser", (userData) => {
    addUser(userData, socket.id);
    io.emit("getUsers", users);
    console.log("📡 Users list:", users);
  });

  socket.on("sendMessage", (data) => {
    const user = getUser(data.receiverId);

    if (user) {
      io.to(user.socketId).emit("getMessage", data);
    } else {
      console.warn("⚠️ Receiver not found in users list:", data.receiverId);
    }
  });
});
