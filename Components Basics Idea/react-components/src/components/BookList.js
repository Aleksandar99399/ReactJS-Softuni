import { Component } from "react";
import Book from "./Book";

class BookList extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div className="booklis">
        <h2> Our Books </h2>
        {this.props.books.map((x) => {
          return <Book title={x.title} description={x.description} />;
        })}
      </div>
    );
  }
}

export default BookList;
