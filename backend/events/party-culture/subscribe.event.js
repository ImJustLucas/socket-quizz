import { v4 as uuidv4 } from "uuid";

import { partyData } from "../../data.js";

const createParty = (socket, io) => () => {
  const partyId = uuidv4();
  partyData[partyId] = {
    id: partyId,
    users: [].push(socket.id),
  };

  socket.join(partyId);
  io.to(partyId).emit("party-created", partyData[partyId]);
};

const joinParty = (socket, io) => async (partyId) => {
  if (!partyData[partyId]) {
    return socket.emit("party-not-found");
  }

  const sockets = await io.in(partyId).fetchSockets();

  if (sockets.length > 4) {
    return socket.emit("party-full");
  }

  partyData[partyId].users.push(socket.id);
  socket.join(partyId);
  io.to(partyId).emit("party-joined", partyData[partyId]);
};

const leaveParty = (socket, io) => (partyId) => {
  if (!partyData[partyId]) {
    return socket.emit("party-not-found");
  }

  partyData[partyId].users = partyData[partyId].users.filter(
    (userId) => userId !== socket.id
  );

  socket.leave(partyId);
  io.to(partyId).emit("party-left", partyData[partyId]);

  if (partyData[partyId].users.length === 0) {
    delete partyData[partyId];
  }
};

const deleteParty = (socket, io) => (partyId) => {
  if (!partyData[partyId]) {
    return socket.emit("party-not-found");
  }

  io.to(partyId).emit("party-deleted", partyData[partyId]);
  delete partyData[partyId];
};

const subscribePartyEvents = {
  create: createParty,
  join: joinParty,
  leave: leaveParty,
  delete: deleteParty,
};

export default subscribePartyEvents;
