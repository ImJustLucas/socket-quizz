import { parties, questions } from "../../data.js";
import partyManagementEvents from "./party-management.events.js";

const startParty = (socket, io) => (partyId) => {
  console.log("@Start party", socket, partyId);

  if (!parties[partyId]) {
    return socket.emit("party-not-found");
  }

  parties[partyId].status = "starting";

  io.to(partyId).emit("party-update-one", parties[partyId]);
};

const nextQuestion = (socket, io) => (partyId) => {
  console.log("@Next question", socket, partyId);

  if (!parties[partyId]) {
    return socket.emit("party-not-found");
  }

  if (
    currentParty.questions.currentQuestion > currentParty.questions.maxQuestions
  ) {
    return endParty(socket, io)(partyId);
  }

  const currentParty = parties[partyId];

  parties[partyId].status = "playing";
  currentParty.questions.currentQuestion += 1;

  io.to(partyId).emit(
    "party-new-question",
    questions[
      currentParty.questions.questionsIds[
        currentParty.questions.currentQuestion
      ]
    ]
  );
  io.emit("party-update-one", parties[partyId]);
};

const endParty = (socket, io) => (partyId) => {
  console.log("@End party", socket, partyId);

  if (!parties[partyId]) {
    return socket.emit("party-not-found");
  }

  parties[partyId].status = "finished";

  socket.to(partyId).emit("party-end", parties[partyId]);

  partyManagementEvents.updatePartiesList(io);
};

const registerAnswer =
  (socket, io) =>
  (partyId, { id, answer }) => {
    console.log("@Register answer", socket, partyId, answer);

    if (!parties[partyId]) {
      return socket.emit("party-not-found");
    }

    const currentParty = parties[partyId];

    currentParty.answeredQuestion[socket.id][answer.id] = {
      id: answer.id,
      answer: answer.answer,
    };

    io.emit("party-update-one", parties[partyId]);
  };

const partyActionsEvent = {
  startParty,
  nextQuestion,
  endParty,
  registerAnswer,
};

export default partyActionsEvent;
