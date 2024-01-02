import { Server, Socket } from "socket.io";

const setupWebSocket = (io: Server) => {
  io.on("connection", (socket: Socket) => {
    try {
      console.log("Connected & Socket Id is: ", socket.id);
    } catch (error) {
      console.error("Error in connection event:", error);
    }
  });

  return io;
};

export default setupWebSocket;
