import { socket } from "..";

const createParty = () => socket.emit("party-create");

const joinParty = (partyId: string) => socket.emit("party-join", partyId);

const leaveParty = (partyId: string) => socket.emit("party-leave", partyId);

const deleteParty = () => socket.emit("party-delete");

export const authPartyEvents = {
  create: createParty,
  join: joinParty,
  leave: leaveParty,
  delete: deleteParty,
};
