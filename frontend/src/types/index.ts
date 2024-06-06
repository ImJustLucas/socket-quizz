export type Party = {
  name: string;
  id: string;
  members: string[];
  status: "waiting" | "playing" | "finished" | "starting";
  questions: {
    maxQuestions: number;
    currentQuestion: number;
    questionsIds: string[];
  };
};

export type memberAnwser = {
  socketId: string;
  partyId: string;
  questions: {
    questionId: string;
    answer: string;
  }[];
  score: number;
};

export type QuestionType = {
  id: string;
  question: string;
  answers: [string, string, string, string];
  correctAnswer: number;
};
