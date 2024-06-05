"use client";

import { PartyPreview } from "@/components/GamePreview";
import { LucasButton } from "@/components/LucasButton";

import { PartyContext } from "@/context/game-context";

import { useContext } from "react";

export default function Home() {
  const { parties } = useContext(PartyContext);

  const handleCreateGame = () => {
    console.log("Create game");
  };
  return (
    <main>
      {parties.map((party) => (
        <PartyPreview key={party.id} party={party} />
      ))}
      <LucasButton
        className="p-4 rounded bg-orange-300"
        onClick={handleCreateGame}
      >
        Add game
      </LucasButton>
      <h1 className="text-6xl text-white text-center">Joindre une salle</h1>
      <div className="max-w-xl">
        <label htmlFor="pseudo">Pseudo</label>
        <input
          type="text"
          placeholder="John Doe"
          className="bg-color-3 rounded-lg border border-gray"
        />
      </div>
      <button className="p-4 rounded bg-orange-400">Add game</button>
    </main>
  );
}
