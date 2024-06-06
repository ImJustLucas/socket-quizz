"use client";

import { AnswerButton } from "@/components/AnswerButton";
import { PartyContext } from "@/context/party-context";
import { QuestionType } from "@/types";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

type QuestionScreenProps = {
    partyId: string;
    question?: QuestionType;
}

export const Question: React.FC<QuestionScreenProps> = ({partyId, question }) => {
  const { parties } = useContext(PartyContext);
  const router = useRouter();

  const currentParty = parties[partyId];

  return (
    <main>
      <p className="absolute top-2 left-2 text-2xl">
        <span>3</span>/10
      </p>
      <div>
        <h1 className="mb-8 text-4xl">Quel est la capitale de la France ?</h1>
        <div className="grid grid-cols-2 gap-2 mb-8">
            <AnswerButton>Paris</AnswerButton>
            <AnswerButton>Marseille</AnswerButton>
            <AnswerButton>Brest</AnswerButton>
            <AnswerButton>Monaco</AnswerButton>
        </div>
        <div className="relative w-full overflow-hidden rounded-full h-2">
            <div className="h-full w-full absolute top-0 left-0 bg-gray-500"></div>
            <div className="h-full w-2/6 absolute top-0 left-0 bg-color-1 timeline"></div>
        </div>
      </div>
    </main>
  );
};
