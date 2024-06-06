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
  }

  return (
    <main>
      <h1 className="text-6xl text-white text-center mb-16">Socket quizz</h1>
      <div
        className="party-list"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
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
          <div className="flex flex-col">
            <label htmlFor="roomName" className="mb-2">Nouvelle salle</label>
            <Input type="text" id="roomName" placeholder="Nom de la salle" className="mb-4" onChange={(e) => {
              setRoomName(e.target.value);
            }}/>
            <Button onClick={handleCreateParty}>Créer une partie</Button>
          </div>
      </div>
    </main>
  );
}
