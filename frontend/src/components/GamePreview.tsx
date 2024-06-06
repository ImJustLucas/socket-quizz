import { Party } from "@/types";
import Link from "next/link";

type GamePreviewProps = {
  party: Party;
};

export const GamePreview: React.FC<GamePreviewProps> = ({ party }) => {
  return (
    <Link
      href={`/party/${party.id}`}
      className="flex justify-between w-full p-4 rounded-lg border border-[#5D5D64] hover:bg-gray-700"
      style={{
        backgroundColor: "#34343A",
      }}
    >
      <p className="text-white font-medium">{party.name ?? party.id}</p>
      <p className="text-white font-medium">{party.members.length} / 4</p>
    </Link>
  );
};
