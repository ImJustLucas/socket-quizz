export type Party = {
  name: string;
  id: string;
  members: string[];
  status: "waiting" | "playing" | "finished";
};
