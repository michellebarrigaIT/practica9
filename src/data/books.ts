import type { Book } from "../types/Book";

export const books: Book[] = [
  {
    id: "1",
    title: "Clean Code",
    author: "Robert C. Martin",
    description: "A handbook of agile software craftsmanship.",
    imageUrl: "/src/assets/clean-code.jpeg"
  },
  {
    id: "2",
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt, David Thomas",
    description: "Journey to mastery in software development.",
    imageUrl: "/src/assets/pragmatic-programmer.jpg"
  },
  {
    id: "3",
    title: "Refactoring",
    author: "Martin Fowler",
    description: "Improving the design of existing code.",
    imageUrl: "/src/assets/refactor.jpg"
  }
];
