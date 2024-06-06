import { parties } from "../../data.js";

const updatePartiesList = (socket) =>
  socket.emit("party-list-update", {
    parties: parties,
  });

const updateParty = (socket, io) => (partyId) => {
  console.log("@Update party", partyId);

  if (!parties[partyId]) {
    return socket.emit("party-not-found");
  }

  io.to(partyId).emit("party-update-one", parties[partyId]);
};

const clearDisconnectedUser = (socket, io) => {
  for (const party in parties) {
    const index = party.members.indexOf(socket.id);

    if (index !== -1) {
      party.members.splice(index, 1);
      io.to(party.id).emit("party-update-one", party);
    }
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
