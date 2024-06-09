export const parties = {
  test: {
    id: "test",
    name: "Test Party",
    members: [],
    status: "waiting",
    questions: {
      maxQuestions: 4,
      currentQuestion: 0,
      questionsIds: ["0", "1", "2", "3"],
    },
    answeredQuestion: {},
    owner: "",
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
      questionsIds: ["0", "1", "2", "3"],
    },
    answeredQuestion: {},
    status: "waiting",
    owner: "a0IdVy8IJpp73xtAAAB_",
  },
};

export const questions = [
  {
    question: "Quelle est la capitale de la France ?",
    answers: ["Paris", "Londres", "Madrid", "Berlin"],
    correctAnswer: 0,
  },
  {
    question: "Quelle est la capitale de l'Allemagne ?",
    answers: ["Paris", "Londres", "Madrid", "Berlin"],
    correctAnswer: 3,
  },
  {
    question: "Quelle est la capitale de l'Espagne ?",
    answers: ["Paris", "Londres", "Madrid", "Berlin"],
    correctAnswer: 2,
  },
  {
    question: "Quelle est la capitale du Royaume-Uni ?",
    answers: ["Paris", "Londres", "Madrid", "Berlin"],
    correctAnswer: 1,
  },
];
