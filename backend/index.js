import express from "express";
import http from "node:http";
import ip from "ip";
import { Server } from "socket.io";
import cors from "cors";

import { socketOnDisconnet } from "./events/global/disconnect.event.js";
import { sendMessageGLobal } from "./events/global/message.event.js";

import subscribePartyEvents from "./events/party-culture/subscribe.event.js";
import partyManagementEvents from "./events/party-culture/party-management.events.js";
import partyActionsEvent from "./events/party-culture/actions.events.js";

const app = express();
const server = http.createServer(app);
const PORT = 1337;

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.use(cors());

app.get("/", (req, res) => {
  res.json(`ip address: http://localhost:${PORT}`);
});

io.on("connection", (socket) => {
  console.log(`@Connection: ${socket.id}`);

  socket.on("disconnect", socketOnDisconnet(socket, io));

  socket.on("message", sendMessageGLobal(io));

  socket.on("party-get-all", () => {
    console.log("@Get all parties");
    partyManagementEvents.updatePartiesList(io);
  });

  socket.on("party-create", subscribePartyEvents.create(socket, io));
  socket.on("party-join", subscribePartyEvents.join(socket, io));
  socket.on("party-leave", subscribePartyEvents.leave(socket, io));
  socket.on("party-delete", subscribePartyEvents.delete(socket, io));

  socket.on("party-start", partyActionsEvent.startParty(socket, io));
  socket.on("party-next-question", partyActionsEvent.nextQuestion(socket, io));
  socket.on("party-end", partyActionsEvent.endParty(socket, io));
  socket.on(
    "party-answer-question",
    partyActionsEvent.registerAnswer(socket, io)
  );
});

server.listen(PORT, () => {
  console.log(`Server ip : http://localhost:${PORT}`);
});
