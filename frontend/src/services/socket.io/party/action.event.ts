import { socket } from "..";

const startParty = (partyId: string) => socket.emit("party-start", partyId);

const nextQuestion = (partyId: string) =>
  socket.emit("party-next-question", partyId);

const answerQuestion = (
  partyId: string,
  anwser: {
    index: number;
    answer: string;
  }
) => socket.emit("party-answer-question", partyId, anwser);

export const partyEvents = {
  start: startParty,
  nextQuestion,
  answerQuestion,
};
