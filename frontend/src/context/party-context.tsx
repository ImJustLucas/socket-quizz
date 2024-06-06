"use client";

import { socket } from "@/services/socket.io";
import { partyEvent } from "@/services/socket.io/party";
import type { Party } from "@/types";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

interface IGameContext {
  parties: Record<string, Party>;
  isFetching: boolean;
}

const PartyContext = createContext<IGameContext>({} as IGameContext);

const PartyProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [parties, setParties] = useState<Record<string, Party>>({});
  const [isFetching, setIsFetching] = useState(true);

  const router = useRouter();

  socket.on("party-list-update", (parties: Record<string, Party>) => {
    console.log("@Update - Parties", parties);
    setParties(parties);
    setIsFetching(false);
  });

  socket.on("party-update-one", (party) => {
    console.log("@Party update one", party);
    setParties((prev) => ({
      ...prev,
      [party.id]: party,
    }));
  });

  socket.on("party-created", (party) => {
    console.log("@Party created");
    router.push(`/party/${party.id}`);
  });

  useEffect(() => {
    partyEvent.getParties();
    // return () => {
    //   socket.off("party-get-all");
    // };
  }, []);

  return (
    <PartyContext.Provider value={{ parties, isFetching }}>
      {children}
    </PartyContext.Provider>
  );
};

export { PartyProvider, PartyContext };
