"use client";

import { LucasButton } from "@/components/LucasButton";
import Button from "@/components/button";
import Image from "next/image";

export default function Home() {
  const handleCreateGame = () => {
    console.log("Create game");
  };
  return (
    <main>
      <LucasButton
        className="p-4 rounded bg-orange-300"
        onClick={handleCreateGame}
      >
        Add game
      </LucasButton>
      <h1 className="text-6xl text-white text-center">Joindre une salle</h1>
      <div className="max-w-xl">
        <label htmlFor="pseudo">Pseudo</label>
        <input type="text" placeholder="John Doe" className="bg-color-3 rounded-lg border border-gray"/>
      </div>
      <Button text='Button' />
      <button className="p-4 rounded bg-orange-400">Add game</button>
    </main>
  );
}
