"use client";


import { PartyContext } from "@/context/game-context";

import { useContext } from "react";
import { Button } from "@/components/button";
import { Input } from "@/components/Input";
import JoinGame from "@/components/JoinGame";

import { GamePreview } from "@/components/GamePreview"; // Import the missing component

export default function Home() {
  const { parties } = useContext(PartyContext);

  const handleCreateGame = () => {
    console.log("Create game");
  };
  return (
    <main>
      {!!parties.length &&
        parties.map((party) => <GamePreview key={party.id} party={party} />)}
    </main>
  );
}
