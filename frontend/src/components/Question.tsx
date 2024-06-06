"use client";

import { AnswerButton } from "@/components/AnswerButton";
import { PartyContext } from "@/context/party-context";
import { socket } from "@/services/socket.io";
import { partyEvents } from "@/services/socket.io/party/action.event";
import type { QuestionType } from "@/types";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { partyEvents } from "@/services/socket.io/party/action.event";

type QuestionScreenProps = {
  partyId: string;
};

export const Question: React.FC<QuestionScreenProps> = ({ partyId }) => {
  const { parties } = useContext(PartyContext);
  const [question, setQuestion] = useState<QuestionType | null>(null);
  const [alreadyAnswered, setAlreadyAnswered] = useState(false);

  socket.on("party-next-question", (question: QuestionType) => {
    console.log("@Question", question);
    setQuestion(question);
    setAlreadyAnswered(false);
    //TODO: restart timer
  });

  const handleAnswer = ({
    index,
    answer,
  }: {
    index: number;
    answer: string;
  }) => {
    if (alreadyAnswered) return;
    partyEvents.answerQuestion(partyId, { index, answer });
    setAlreadyAnswered(true);
  };

  const currentParty = parties[partyId];

  const nextQuestion = () => {
      setTimeout(() => {
          if (currentParty.questions.currentQuestion < currentParty.questions.maxQuestions) {
              partyEvents.nextQuestion;
          } else {
              partyEvents.finished;
          }
      }, 10000);
  }

  return (
    <main>
      <p className="absolute top-2 left-2 text-2xl">
        <span>3</span>/10
      </p>
      <div>
        <h1 className="mb-8 text-4xl">Quel est la capitale de la France ?</h1>
        <div className="grid grid-cols-2 gap-2 mb-8">
          {question?.answers.map((answer, index) => (
            <AnswerButton
              key={index}
              onClick={() => handleAnswer({ index, answer })}
            >
              {answer}
            </AnswerButton>
          ))}
        </div>
        <div className="relative w-full overflow-hidden rounded-full h-2">
          <div className="h-full w-full absolute top-0 left-0 bg-gray-500" />
          <div className="h-full w-2/6 absolute top-0 left-0 bg-color-1 timeline" />
        </div>
      </div>
    </main>
  );
};
