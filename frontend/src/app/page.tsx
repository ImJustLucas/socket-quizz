"use client";

import { PartyPreview } from "@/components/GamePreview";

import { PartyContext } from "@/context/game-context";

import { useContext } from "react";
import { Button } from "@/components/button";
import { Input } from "@/components/input";

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
      <h1 className="text-6xl text-white text-center">Joindre une salle</h1>
      <div className="max-w-xl">
        <label htmlFor="pseudo">Pseudo</label>
        <Input
          type="text"
          placeholder="John Doe"
          className="bg-color-3 rounded-lg border border-gray"
        />
      </div>
      <button className="p-4 rounded bg-orange-400">Add game</button>
      <div className="flex flex-col items-center justify-center max-w-3xl">
        <h1 className="text-6xl text-white text-center mb-16">
          Joindre Les Ptits Loups
        </h1>
        <div className="w-full max-w-sm flex flex-col">
          <label htmlFor="pseudo" className="text-white text-lg">
            Pseudo
          </label>
          <Input className="mb-8" placeholder="John Doe" />
          <Button onClick={handleCreateGame}>Joindre</Button>
        </div>
      </div>
    </main>
  );
}
