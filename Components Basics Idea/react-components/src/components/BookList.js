import { Component } from "react";
import Book from "./Book";

class BookList extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  bookClicked(title) {
    console.log(`The book ${title} is clicked!`);
  }

  render() {
    return (
      <div className="booklis">
        <h2> Our Books </h2>
        {this.props.books.map((x) => {
          return (
            <Book
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
