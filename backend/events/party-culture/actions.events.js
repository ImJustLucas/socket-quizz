import { parties, questions } from "../../data.js";
import partyManagementEvents from "./party-management.events.js";

const startParty = (socket, io) => (partyId) => {
  console.log("@Start party", partyId);

  if (!parties[partyId]) {
    return socket.emit("party-not-found");
  }

  parties[partyId].status = "starting";

  io.emit("party-update-one", parties[partyId]);
};

let ischanging;

const nextQuestion = (socket, io) => (partyId) => {
  console.log("@Next question", partyId, ischanging);
  if (ischanging) return console.log("Is changing");
  ischanging = true;

  if (!parties[partyId]) {
    return socket.emit("party-not-found");
  }

  const currentParty = parties[partyId];
  console.log(
    "Need to end ?",
    currentParty.questions.currentQuestion > currentParty.questions.maxQuestions
  );

  if (
    currentParty.questions.currentQuestion > currentParty.questions.maxQuestions
  ) {
    return endParty(socket, io)(partyId);
  }

  parties[partyId].status = "playing";

  console.log(
    "@Next question",
    currentParty.questions.currentQuestion,
    questions[
      currentParty.questions.questionsIds[
        currentParty.questions.currentQuestion
      ]
    ]
  );

  io.to(partyId).emit(
    "party-next-question",
    questions[
      currentParty.questions.questionsIds[
        currentParty.questions.currentQuestion
      ]
    ]
  );
  currentParty.questions.currentQuestion += 1;
  io.emit("party-update-one", parties[partyId]);
  ischanging = false;
};

const endParty = (socket, io) => (partyId) => {
  if (!parties[partyId]) {
    return socket.emit("party-not-found");
  }

  parties[partyId].status = "finished";

  socket.to(partyId).emit("party-end", parties[partyId]);

  partyManagementEvents.updatePartiesList(io);
};

const registerAnswer = (socket, io) => (partyId, answer) => {
  console.log("@Register answer", socket.id, partyId);

  if (!parties[partyId]) {
    return socket.emit("party-not-found");
  }

  const currentParty = parties[partyId];

  if (currentParty.answeredQuestion[socket.id]) {
    currentParty.answeredQuestion[socket.id][answer.id] = {
      id: answer.id,
      answer: answer.answer,
    };
  } else {
    currentParty.answeredQuestion = {
      ...currentParty.answeredQuestion,
      [socket.id]: {
        [answer.id]: {
          id: answer.id,
          answer: answer.answer,
        },
      },
    };
  }

  io.emit("party-update-one", parties[partyId]);
};

const partyActionsEvent = {
  startParty,
  nextQuestion,
  endParty,
  registerAnswer,
};

export default partyActionsEvent;
