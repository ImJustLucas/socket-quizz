import { Party } from "@/types";

type PartyPreviewProps = {
  party: Party;
};

export const PartyPreview: React.FC<PartyPreviewProps> = ({ party }) => {
  return (
    <div className="flex justify-between items-center content-center w-full">
      <p className="text-white font-medium">{party.name ?? party.id}</p>
      <p className="text-white font-medium">{party.member.length} / 4</p>
    </div>
  );
};
