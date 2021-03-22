import "./App.css";
import Heading from "./components/Heading";
import BookList from "./components/BookList";
import Counter from "./components/Counter";
import Footer from "./components/Footer";

let booksData = [
  { id: 1, title: "Harry Potter", description: "Wizzard and stuff" },
  { id: 2, title: "Zoro", description: "The mask on Zoro" },
  {
    id: 3,
    title: "The Gods are sure crazy",
    description: "The most funny movie",
  },
  { id: 4, description: "Missing" },
];

function App() {
  return (
    <div align="center" className="site-wrapper">
      <Heading>Our Custom Library</Heading>
      <Counter />

      <Counter />
      <BookList books={booksData} />

      <Footer />
    </div>
  );
}

export default App;
