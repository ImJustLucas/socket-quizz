import next from "next";
import { socket } from "..";
import { finished } from "stream";

const startParty = (partyId: string) => socket.emit("party-start", partyId);

const nextQuestion = (partyId: string) =>
  socket.emit("party-next-question", partyId);

const answerQuestion = (
  partyId: string,
  anwser: {
    id: number;
    answer: string;
  }
) => socket.emit("party-answer-question", partyId, anwser);

const end = (partyId: string) => socket.emit("party-end", partyId);

export const partyEvents = {
  start: startParty,
  nextQuestion,
  answerQuestion,
  end,
};
