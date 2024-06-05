"use client";

import { JoinGame } from "@/components/JoinGame";
import { PartyContext } from "@/context/party-context";
import { socket } from "@/services/socket.io";
import { useRouter } from "next/navigation";

import { useContext } from "react";

const PartyIdPage = ({ params }: { params: { partyId: string } }) => {
  const router = useRouter();
  const { parties, isFetching } = useContext(PartyContext);

  console.log("@context", parties, isFetching);

  console.log(isFetching);

  const partyId = params.partyId;

  if (isFetching || !partyId) <>Loading</>;

  const party = parties[partyId];

  if (!party && !isFetching) {
    console.log("party not found");
    router.push("/");
  }

  console.log("party", party);

  if (party.members.length > 4) {
    return <>Party is full</>;
  }

  if (!party.members.includes(socket.id!)) {
    return <JoinGame partyId={partyId} />;
  }

  if (party.status === "waiting") {
    return <>Waiting for other players</>;
  }

  if (party.status === "finished") {
    return <>Game is finished</>;
  }

  return (
    <div>
      <h1>game</h1>
    </div>
  );
};

export default PartyIdPage;
