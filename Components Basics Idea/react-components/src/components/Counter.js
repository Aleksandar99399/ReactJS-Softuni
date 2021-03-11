import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 11,
    };

    this.resetCounter = this.resetCounter.bind(this);
  }

  incrementCounter(e) {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  decrementCounter(e) {
    // this.setState({ count: this.state.count - 1 });
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  }

  resetCounter(e) {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div className="counter">
        <h3>Book Counter</h3>
        <button onClick={(e) => this.decrementCounter()}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.incrementCounter.bind(this)}>+</button>
        {/* We must to set of function .bind(this) to say who is the context - component */}
        <button onClick={this.resetCounter}>Reset</button>
      </div>
    );
  }
}

export default Counter;
