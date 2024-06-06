"use client";

import { Button } from "@/components/button";
import { PartyContext } from "@/context/party-context";
import { partyEvents } from "@/services/socket.io/party/action.event";
import { authPartyEvents } from "@/services/socket.io/party/authentification.event";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export const Starting: React.FC<{
  partyId: string;
}> = ({ partyId }) => {
  const { parties } = useContext(PartyContext);
  const router = useRouter();
  const currentParty = parties[partyId];

  const [countdown, setCountdown] = useState(5);
  const [countdownText, setCountdownText] = useState<string | number>(5);
  const [animationClass, setAnimationClass] = useState("scale-down");

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          setCountdownText("GO!");
          return 0; // Just to stop the countdown
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown > 0) {
      setCountdownText(countdown);
    }

    if (countdown === 0) {
      partyEvents.nextQuestion(partyId);
    }
  }, [countdown, partyId]);

  const handleLeaveGame = () => {
    authPartyEvents.leave(partyId);
    router.push("/");
  };

  return (
    <main>
      <div className="flex flex-col items-center justify-center max-w-3xl">
        <p className={`text-center text-4xl mb-6 ${animationClass}`}>
          La partie va commencer
        </p>
        <p
          className={`text-center text-4xl ${
            countdownText === "GO!" ? "fade-in" : ""
          }`}
        >
          {countdownText}
        </p>
      </div>
      <Button onClick={handleLeaveGame} className="absolute top-4 left-4">
        Quitter
      </Button>
    </main>
  );
};
