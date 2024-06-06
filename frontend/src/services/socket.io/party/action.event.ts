import { socket } from "..";

const startParty = (partyId: string) => socket.emit("party-start", partyId);

export const partyEvents = {
  start: startParty,
};