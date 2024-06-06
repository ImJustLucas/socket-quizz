import { parties } from "../../data.js";

const updatePartiesList = (io) => io.emit("party-list-update", parties);

const updateParty = (socket, io) => (partyId) => {
  console.log("@Update party", socket, partyId);

  if (!parties[partyId]) {
    return socket.emit("party-not-found");
  }

  io.emit("party-update-one", parties[partyId]);
};

const clearDisconnectedUser = (socket, io) => {
  for (const partyId in parties) {
    const party = parties[partyId];
    party.members = party.members.filter((userId) => userId !== socket.id);
  }

  updatePartiesList(io);
  console.log("@Clear user from parties");
};

const partyManagementEvents = {
  updatePartiesList,
  updateParty,
  clearDisconnectedUser,
};

export default partyManagementEvents;
