const socketServer = (server) => {
  const io = require("socket.io")(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  //   io.use((socket, next) => {
  //     yourMiddleware(socket, next);
  //   });

  io.on("connection", async (socket) => {});
};

module.exports = socketServer;
