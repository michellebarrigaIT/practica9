import type { Book } from "../types/Book";

export const books: Book[] = [
  {
    id: "1",
    title: "Clean Code",
    author: "Robert C. Martin",
    description: "A handbook of agile software craftsmanship.",
    imageUrl: "/src/assets/clean-code.jpeg",
    year: 2008,
    publisher: "Prentice Hall",
    pages: 464
  },
  {
    id: "2",
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt, David Thomas",
    description: "Journey to mastery in software development.",
    imageUrl: "/src/assets/pragmatic-programmer.jpg",
    year: 1999,
    publisher: "Addison-Wesley",
    pages: 352
  },
  {
    id: "3",
    title: "Refactoring",
    author: "Martin Fowler",
    description: "Improving the design of existing code.",
    imageUrl: "/src/assets/refactor.jpg",
    year: 1999,
    publisher: "Addison-Wesley",
    pages: 448
  },
  {
    id: "4",
    title: "Design Patterns",
    author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
    description: "The classic book introducing design patterns in software engineering.",
    imageUrl: "/src/assets/design-patterns.jpg",
    year: 1994,
    publisher: "Addison-Wesley",
    pages: 395
  },
  {
    id: "5",
    title: "Legacy Code",
    author: "Michael Feathers",
    description: "Working Effectively with Legacy Code: Techniques to work safely with legacy code and make improvements.",
    imageUrl: "/src/assets/legacy-code.jpg",
    year: 2004,
    publisher: "Prentice Hall",
    pages: 456
  },
  {
    id: "6",
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein",
    description: "A comprehensive textbook on algorithms and data structures.",
    imageUrl: "/src/assets/algorithms.jpg",
    year: 2009,
    publisher: "MIT Press",
    pages: 1312
  },
  {
    id: "7",
    title: "You Don't Know JS Yet",
    author: "Kyle Simpson",
    description: "Deep dive into the core mechanisms of JavaScript.",
    imageUrl: "/src/assets/ydkjs.jpg",
    year: 2020,
    publisher: "Independently published",
    pages: 278
  },
  {
    id: "8",
    title: "The Mythical Man-Month",
    author: "Frederick P. Brooks Jr.",
    description: "Essays on software engineering and project management.",
    imageUrl: "/src/assets/mythical-man-month.jpg",
    year: 1975,
    publisher: "Addison-Wesley",
    pages: 322
  }
];
