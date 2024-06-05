import { socket } from "..";
import { authPartyEvents } from "./authentification.event";

const getAllParties = () => socket.emit("party-get-all");

export const partyEvent = {
  getParties: getAllParties,
  ...authPartyEvents,
};
