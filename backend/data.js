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
    status: "waiting",
  },
};

export const questions = [
  {
    id: "1",
    question: "Quelle est la capitale de la France ?",
    anwsers: ["Paris", "Londres", "Madrid", "Berlin"],
    correctAnswer: "Paris",
  },
  {
    id: "2",
    question: "Quelle est la capitale de l'Allemagne ?",
    anwsers: ["Paris", "Londres", "Madrid", "Berlin"],
    correctAnswer: "Berlin",
  },
  {
    id: "3",
    question: "Quelle est la capitale de l'Espagne ?",
    anwsers: ["Paris", "Londres", "Madrid", "Berlin"],
    correctAnswer: "Madrid",
  },
  {
    id: "4",
    question: "Quelle est la capitale du Royaume-Uni ?",
    anwsers: ["Paris", "Londres", "Madrid", "Berlin"],
    correctAnswer: "Londres",
  },
];
