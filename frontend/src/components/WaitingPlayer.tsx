"use client";

import { Button } from "@/components/button";
import { Input } from "@/components/Input";
import { PartyContext } from "@/context/party-context";
import { authPartyEvents } from "@/services/socket.io/party/authentification.event";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

export const WaitingPlayer: React.FC<{
  partyId: string;
}> = ({ partyId }) => {
  const { parties } = useContext(PartyContext);
  const router = useRouter();

  const currentParty = parties[partyId];

  const handleLeaveGame = () => {
    authPartyEvents.leave(partyId);
    router.push("/");
  }

  return (
    <main>
      <div className="flex flex-col items-center justify-center max-w-3xl">
        <p className="text-center text-4xl mb-6">En attentes de joueur...</p>
        <p className="text-center text-4xl"><span>{currentParty.members.length}</span>/4</p>
      </div>
      <Button onClick={handleLeaveGame} className="absolute top-4 left-4">Quitter</Button>
    </main>
  );
};
