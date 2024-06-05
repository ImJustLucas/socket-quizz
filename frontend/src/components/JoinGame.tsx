"use client";

import { Button } from "@/components/button";
import { Input } from "@/components/Input";
import { PartyContext } from "@/context/party-context";
import { authPartyEvents } from "@/services/socket.io/party/authentification.event";
import { useContext, useState } from "react";

export const JoinGame: React.FC<{
  partyId: string;
}> = ({ partyId }) => {
  const [pseudo, setPseudo] = useState("");
  const { parties } = useContext(PartyContext);

  const currentParty = parties[partyId];

  const handleJoinGame = () => {
    console.log("Create game", pseudo);
    authPartyEvents.join({ partyId, pseudo });
  };
  return (
    <main>
      <div className="flex flex-col items-center justify-center max-w-3xl">
        <h1 className="text-6xl text-white text-center mb-16">
          Rejoindre {currentParty.name}
        </h1>
        <div className="w-full max-w-sm flex flex-col">
          <label htmlFor="pseudo" className="text-white text-lg">
            Pseudo
          </label>
          <Input
            className="mb-8"
            placeholder="John Doe"
            onChange={(e) => {
              setPseudo(e.target.value);
            }}
          />
          <Button onClick={handleJoinGame}>Joindre</Button>
        </div>
      </div>
    </main>
  );
};
