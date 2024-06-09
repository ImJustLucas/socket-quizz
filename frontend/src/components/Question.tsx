"use client";

import { AnswerButton } from "@/components/AnswerButton";
import { socket } from "@/services/socket.io";
import { partyEvents } from "@/services/socket.io/party/action.event";
import type { QuestionType } from "@/types";
import { useContext, useEffect, useState } from "react";

type QuestionScreenProps = {
  partyId: string;
};

export const Question: React.FC<QuestionScreenProps> = ({ partyId }) => {
  const [question, setQuestion] = useState<QuestionType | null>(null);
  const [alreadyAnswered, setAlreadyAnswered] = useState(false);

  const handleAnswer = ({ id, answer }: { id: number; answer: string }) => {
    if (alreadyAnswered) return;
    partyEvents.answerQuestion(partyId, { id, answer });
    setAlreadyAnswered(true);
  };

  socket.on("party-next-question", (question: QuestionType) => {
    setQuestion(question);
    setAlreadyAnswered(false);
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      partyEvents.end(partyId);
    }, 10000);

    return () => clearTimeout(timeoutId);
  }, [partyId, alreadyAnswered]);

  if (!question) return null;

  return (
    <main>
      <p className="absolute top-2 left-2 text-2xl">
        <span>3</span>/10
      </p>
      <div>
        <h1 className="mb-8 text-4xl">{question.question}</h1>
        <div className="grid grid-cols-2 gap-2 mb-8">
          {question?.answers.map((answer, index) => (
            <AnswerButton
              key={index}
              correct={question.correctAnswer === index && alreadyAnswered}
              wrong={question.correctAnswer !== index && alreadyAnswered}
              onClick={() => handleAnswer({ id: index, answer })}
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
