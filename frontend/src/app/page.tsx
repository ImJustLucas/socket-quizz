"use client";

import { PartyContext } from "@/context/party-context";

import { useContext } from "react";

import { GamePreview } from "@/components/GamePreview";
import { Button } from "@/components/button";

export default function Home() {
  const { parties } = useContext(PartyContext);

  const handleCreateParty = () => {
    console.log("Create party");
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
            <input type="text" id="roomName" placeholder="Nom de la salle" className="bg-[#34343A] border border-[#5D5D64] p-4 rounded-lg mb-4"/>
            <Button>Créer une partie</Button>
          </div>
      </div>
    </main>
  );
}
