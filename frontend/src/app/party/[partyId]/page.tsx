"use client";

import { JoinGame } from "@/components/JoinGame";
import { Question } from "@/components/Question";
import { Starting } from "@/components/Starting";
import { WaitingPlayer } from "@/components/WaitingPlayer";
import { PartyContext } from "@/context/party-context";
import { socket } from "@/services/socket.io";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useContext } from "react";

const PartyIdPage = ({ params }: { params: { partyId: string } }) => {
  const router = useRouter();
  const { parties, isFetching } = useContext(PartyContext);

  console.log(isFetching);

  const partyId = params.partyId;

  if (isFetching || !partyId) return <>Loading</>;

  const party = parties[partyId];

  if (!party && !isFetching) {
    console.log("party not found");
    router.push("/");
  }

  console.log("party", party);

  if (party.members.length >= 4) {
    return (
      <div>
        <h3>Party is full</h3>
        <Link href={"/"}>Return to home page</Link>
      </div>
    );
  }

  return <Question partyId={partyId}/>;

  if (!party.members.includes(socket.id as string)) {
    return <JoinGame partyId={partyId} />;
  }

  if (party.status === "waiting") {
    return <WaitingPlayer partyId={partyId} />;
  }

  if (party.status === "starting") {
    return <Starting partyId={partyId} />;
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
