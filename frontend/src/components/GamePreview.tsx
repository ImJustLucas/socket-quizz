import { Party } from "@/types";

type GamePreviewProps = {
  party: Party;
};

export const GamePreview: React.FC<GamePreviewProps> = ({ party }) => {
  return (
    <div className="flex justify-between items-center content-center w-full">
      <p className="text-white font-medium">{party.name ?? party.id}</p>
      <p className="text-white font-medium">{party.members.length} / 4</p>
    </div>
  );
};
