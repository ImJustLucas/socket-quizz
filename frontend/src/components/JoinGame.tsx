"use client";

import { Button } from "@/components/button";
import { Input } from "@/components/Input";

export default function JoinGame() {

  const handleCreateGame = () => {
    console.log("Create game");
  };
  return (
    <main>
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
