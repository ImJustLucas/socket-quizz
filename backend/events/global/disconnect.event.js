import partyManagementEvents from "../party-culture/party-management.events.js";

export const socketOnDisconnet = (socket, io) => () => {
  console.log("user disconnected");
  socket.broadcast.emit("user disconnected");

  partyManagementEvents.clearDisconnectedUser(socket, io);
};
