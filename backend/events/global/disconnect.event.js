export const socketOnDisconnet = (socket) => () => {
  console.log("user disconnected");
  socket.broadcast.emit("user disconnected");
};
