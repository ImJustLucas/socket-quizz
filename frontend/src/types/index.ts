export type Party = {
  name: string;
  id: PartyID;
  members: string[];
  status: "waiting" | "playing" | "finished" | "starting";
  questions: {
    maxQuestions: number;
    currentQuestion: number;
    questionsIds: string[];
  };
  anwseredQuestion: Record<SocketID, UserAnwser>;
};

export type Anwser = {
  id: string;
  answer: string;
};

type UserAnwser = Record<QuestionID, Anwser>;

export type QuestionType = {
  id: string;
  question: string;
  answers: [string, string, string, string];
  correctAnswer: number;
};

type SocketID = string;
type PartyID = string;
type QuestionID = string;
