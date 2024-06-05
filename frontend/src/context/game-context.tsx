"use client";

import { socket } from "@/services/socket.io";
import { partyEvent } from "@/services/socket.io/party";
import { createContext, useEffect, useState } from "react";

interface IGameContext {
  parties: any[];
}

const PartyContext = createContext<IGameContext>({} as IGameContext);

const PartyProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [parties, setParties] = useState([]);

  socket.on("party-get-all", (response) => {
    console.log("@Parties", response);
    setParties(response);
  });

  useEffect(() => {
    partyEvent.getParties();

    return () => {
      socket.off("party-get-all");
    };
  }, []);

  return (
    <PartyContext.Provider value={{ parties }}>
      {children}
    </PartyContext.Provider>
  );
};

export { PartyProvider, PartyContext };
