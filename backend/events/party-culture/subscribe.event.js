import { v4 as uuidv4 } from "uuid";

import { parties } from "../../data.js";
import partyManagementEvents from "./party-management.events.js";

const createParty = (socket, io) => () => {
  const partyId = uuidv4();
  parties[partyId] = {
    id: partyId,
    members: [].push(socket.id),
  };

  socket.join(partyId);
  io.to(partyId).emit("party-created", parties[partyId]);

  partyManagementEvents.updatePartiesList(socket);
};

const joinParty =
  (socket, io) =>
  async ({ partyId, pseudo }) => {
    console.log("@Join party", partyId, pseudo);
    if (!parties[partyId]) {
      return socket.emit("party-not-found");
    }

    const sockets = await io.in(partyId).fetchSockets();

    if (sockets.length > 4) {
      return socket.emit("party-full");
    }

    parties[partyId].members.push(socket.id);
    socket.join(partyId);
    io.to(partyId).emit("party-joined", parties[partyId]);
    partyManagementEvents.updatePartiesList(socket);
  };

const leaveParty = (socket, io) => (partyId) => {
  console.log("@Leave party", partyId);

  if (!parties[partyId]) {
    return socket.emit("party-not-found");
  }

  parties[partyId].members = parties[partyId].members.filter(
    (userId) => userId !== socket.id
  );

  socket.leave(partyId);
  io.to(partyId).emit("party-left", parties[partyId]);
  partyManagementEvents.updatePartiesList(socket);
};

const deleteParty = (socket, io) => (partyId) => {
  if (!parties[partyId]) {
    return socket.emit("party-not-found");
  }

  io.to(partyId).emit("party-deleted", parties[partyId]);
  delete parties[partyId];
};

const subscribePartyEvents = {
  create: createParty,
  join: joinParty,
  leave: leaveParty,
  delete: deleteParty,
};

export default subscribePartyEvents;
