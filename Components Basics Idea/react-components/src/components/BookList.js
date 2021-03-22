import { Component } from "react";
import Book from "./Book";
import bookService from "../services/bookService";

class BookList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [],
    };
  }

  bookClicked(title) {
    console.log(`The book ${title} is clicked!`);
  }

  componentDidMount() {
    bookService.getBooks().then((cars) => {
      this.setState(() => ({ cars }));
    });
  }

  render() {
    return (
      <div className="booklis">
        <h2> Our Books </h2>
        {this.props.books.map((x) => {
          return (
            <Book
              key={x.id}
              title={x.title}
              description={x.description}
              //   clickHandler={this.bookClicked.bind(this, x.title)}
              clickHandler={() => this.bookClicked(x.title)}
            />
          );
        })}
      </div>
    );
  }
}

export default BookList;
