"use client";

import { PartyContext } from "@/context/game-context";
import { useContext } from "react";

const PartyIdPage = ({ params }: { params: { partyId: string } }) => {
  console.log(params.partyId);

  const { parties } = useContext(PartyContext);

  if (parties)
    return (
      <div>
        <h1>party page id</h1>
      </div>
    );
};

export default PartyIdPage;
