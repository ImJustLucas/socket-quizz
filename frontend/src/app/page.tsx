"use client";

import { LucasButton } from "@/components/LucasButton";

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
    </main>
  );
}
