import { parties } from "../../data";

const updatePartiesList = (socket) =>
  socket.emit("party-list-update", {
    parties: parties,
  });

const partyManagementEvents = {
  updatePartiesList,
};

export default partyManagementEvents;
