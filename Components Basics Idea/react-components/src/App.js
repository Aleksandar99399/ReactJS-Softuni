import "./App.css";
import Heading from "./components/Heading";
import BookList from "./components/BookList";
import Counter from "./components/Counter";

let booksData = [
  { title: "Harry Potter", description: "Wizzard and stuff" },
  { title: "Zoro", description: "The mask on Zoro" },
  { title: "The Gods are sure crazy", description: "The most funny movie" },
  { description: "Missing" },
];

function App() {
  return (
    <div align="center" className="site-wrapper">
      <Heading>Our Custom Library</Heading>
      <Counter />
      ,
      <Counter />
      <BookList books={booksData} />
    </div>
  );
}

export default App;
