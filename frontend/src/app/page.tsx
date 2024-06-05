"use client";

import { PartyContext } from "@/context/party-context";

import { useContext } from "react";

import { GamePreview } from "@/components/GamePreview";

export default function Home() {
  const { parties } = useContext(PartyContext);

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
          : "No party available"}
      </div>
    </main>
  );
}
