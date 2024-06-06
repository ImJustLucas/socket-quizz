"use client";

import { PartyContext } from "@/context/party-context";

import { useContext, useState } from "react";

import { GamePreview } from "@/components/GamePreview";
import { Button } from "@/components/button";
import { authEvents } from "@/services/socket.io/global/init.socket";
import { authPartyEvents } from "@/services/socket.io/party/authentification.event";
import { Input } from "@/components/Input";

export default function Home() {
  const { parties } = useContext(PartyContext);
  const [room, setRoomName] = useState("");

  const handleCreateParty = () => {
    authPartyEvents.create(room);
    setRoomName("");
  };

  return (
    <main>
      <h1 className="text-6xl text-white text-center mb-16">Socket quizz</h1>
      <div
        className="flex flex-col gap-2 w-full"
      >
        {Object.values(parties).length > 0
          ? Object.values(parties).map((party) => (
              <GamePreview key={party.id} party={party} />
            ))
          : (
            <>
              <p className="text-white text-2xl mb-4">Aucune partie en cours</p>
            </>
          )}
          <div className="flex flex-col mt-4">
            <label htmlFor="roomName" className="mb-2">Nouvelle salle</label>
            <Input type="text" id="roomName" value={room} placeholder="Nom de la salle" className="mb-4" onChange={(e) => {
              setRoomName(e.target.value);
            }}
          />
          <Button onClick={handleCreateParty} disabled={room.trim() === ""}>Créer une partie</Button>
        </div>
      </div>
    </main>
  );
}
