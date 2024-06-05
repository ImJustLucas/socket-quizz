import { Party } from "@/types";
import Link from "next/link";

type GamePreviewProps = {
  party: Party;
};

export const GamePreview: React.FC<GamePreviewProps> = ({ party }) => {
  return (
    <Link
      href={`/party/${party.id}`}
      className="flex justify-between items-center content-center w-full"
      style={{
        backgroundColor: "#34343A",
      }}
    >
      <p className="text-white font-medium">{party.name ?? party.id}</p>
      <p className="text-white font-medium">{party.members.length} / 4</p>
    </Link>
  );
};
