function getBooks() {
  return fetch("http://localhost:5000/api/cars/all").then((res) => res.json());
}

export default getBooks;
