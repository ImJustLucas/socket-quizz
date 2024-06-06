import { parties } from "../../data.js";

const updatePartiesList = (socket) =>
  socket.emit("party-list-update", {
    parties: parties,
  });

const updateParty = (socket, io) => (partyId) => {
  if (!parties[partyId]) {
    return socket.emit("party-not-found");
  }

  io.to(partyId).emit("party-update-one", parties[partyId]);
};

const partyManagementEvents = {
  updatePartiesList,
  updateParty,
};

export default partyManagementEvents;
