"use client";

import { socket } from "@/services/socket.io";
import { partyEvent } from "@/services/socket.io/party";
import type { Party } from "@/types";
import { createContext, useEffect, useState } from "react";

interface IGameContext {
  parties: Record<string, Party>;
  isFetching: boolean;
}

const PartyContext = createContext<IGameContext>({} as IGameContext);

const PartyProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [parties, setParties] = useState({});
  const [isFetching, setIsFetching] = useState(true);

  socket.on("party-list-update", (response) => {
    console.log("@Parties", response.parties);
    setParties(response.parties);
    setIsFetching(false);
  });

  useEffect(() => {
    partyEvent.getParties();

    return () => {
      //socket.off("party-get-all");
    };
  }, []);

  return (
    <PartyContext.Provider value={{ parties, isFetching }}>
      {children}
    </PartyContext.Provider>
  );
};

export { PartyProvider, PartyContext };
