export const parties = {
  test: {
    id: "test",
    name: "Test Party",
    members: [],
    status: "waiting",
    questions: {
      maxQuestions: 4,
      currentQuestion: 0,
      questionsIds: ["1", "2", "3", "4"],
    },
    answeredQuestion: {},
  },
  full: {
    id: "full",
    name: "full Party",
    members: [
      "a0IdVy8IJpp73xtAAAB_",
      "Xcgof7SKUAYWjaHhAAAP",
      "ZXjp-DRYc4e_uLKjAAAX",
      "Y8i4p7SKUAYWjaHhAAAO",
    ],
    questions: {
      maxQuestions: 4,
      currentQuestion: 0,
      questionsIds: ["1", "2", "3", "4"],
    },
    answeredQuestion: {},
    status: "waiting",
  },
};

export const questions = [
  {
    id: "1",
    question: "Quelle est la capitale de la France ?",
    answers: ["Paris", "Londres", "Madrid", "Berlin"],
    correctAnswer: 0,
  },
  {
    id: "2",
    question: "Quelle est la capitale de l'Allemagne ?",
    answers: ["Paris", "Londres", "Madrid", "Berlin"],
    correctAnswer: 3,
  },
  {
    id: "3",
    question: "Quelle est la capitale de l'Espagne ?",
    answers: ["Paris", "Londres", "Madrid", "Berlin"],
    correctAnswer: 2,
  },
  {
    id: "4",
    question: "Quelle est la capitale du Royaume-Uni ?",
    answers: ["Paris", "Londres", "Madrid", "Berlin"],
    correctAnswer: 1,
  },
];
