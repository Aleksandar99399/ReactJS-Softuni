import { Component } from "react";
import "./Message.css";

class Message extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      company: "Softuni",
    };
  }

  componentDidMount() {
    console.log("Component Did Mount");

    setTimeout(() => {
      this.setState({ company: "Software" });
    }, 1000);
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate");
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount");
  }

  render() {
    //Inlinecss
    // let style = {
    //   backgroundColor: "pink",
    //   fontSize: 44,
    // };

    //Dynamic classes
    let classes = ["default-class"];

    if (true) {
      classes.push("select-class");
    }

    console.log("render");
    return (
      <div className="footer-container">
        <span className="footer-message">
          {this.props.text} | {this.state.company}
        </span>
      </div>
    );
  }
}

export default Message;
