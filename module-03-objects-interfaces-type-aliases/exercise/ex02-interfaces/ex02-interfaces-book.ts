interface Book {
  title: string;
  author: string;
  published: number;
  genres?: string[];
}

interface EBook extends Book {
  fileSizeMB: number;
  format: string;
}

const book1: Book = {
  title: "Harry Potter",
  author: "J.K. Rowling",
  published: 2007,
  genres: ["adventure", "action"],
};

const book2: Book = {
  title: "this is a test book",
  author: "this is author",
  published: 2055,
};

const eBook1: EBook = {
  title: "myBook",
  author: "Me",
  published: 2025,
  genres: ["action", "sci-fi", "adventure"],
  fileSizeMB: 245,
  format: "FORMATTED",
};

console.log(eBook1);
