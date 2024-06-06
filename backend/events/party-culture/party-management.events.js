import { parties } from "../../data.js";

const updatePartiesList = (socket) => {
  console.log("@Update parties list");
  socket.emit("parties-list", parties);
};
const updateParty = (socket, io) => (partyId) => {
  console.log("@Update party", partyId);

  if (!parties[partyId]) {
    return socket.emit("party-not-found");
  }

  io.to(partyId).emit("party-update-one", parties[partyId]);
};

const clearDisconnectedUser = (socket, io) => {
  for (const partyId in parties) {
    const party = parties[partyId];
    party.members = party.members.filter((userId) => userId !== socket.id);
  }

  updatePartiesList(socket, io);
  console.log("@Clear user from parties");
};

const partyManagementEvents = {
  updatePartiesList,
  updateParty,
  clearDisconnectedUser,
};

export default partyManagementEvents;
