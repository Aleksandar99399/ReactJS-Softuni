import { Component } from "react";
import refreshComponent from "../hoc/refreshComponents";
import Message from "./Message";

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.refreshCount);
    return this.props.refreshCount === 0 ? (
      <Message text="All rights reserved &copy;"></Message>
    ) : null;
  }
}

export default refreshComponent(Footer);
