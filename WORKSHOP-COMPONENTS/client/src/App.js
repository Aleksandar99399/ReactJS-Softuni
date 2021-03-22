import { Component } from "react";
import axios from "axios";
import { Route, Link, NavLink, Redirect, Switch } from "react-router-dom";

import * as postService from "./services/postService";

import style from "./App.module.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Main from "./components/Main";
import About from "./components/About";
import ContactUs from "./components/ContactUs";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };

    this.onMenuItemClick = this.onMenuItemClick.bind(this);
  }

  onMenuItemClick(id) {
    this.setState({ selectedPost: id });
  }

  componentDidMount() {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((posts) => {
        this.setState({ posts });
      });
    // postService.getAll().then((posts) => {
    //   this.setState({ posts });
    // });
  }

  render() {
    return (
      <div className={style.app}>
        <Header />
        <div className={style.container}>
          <Menu />
          <Switch>
            {/* exact - точно определения път */}
            <Route path="/" exact>
              <Main posts={this.state.posts} />
            </Route>
            <Route path="/about/:name" component={About} />
            <Route path="/contact-us" component={ContactUs} />
            <Route render={() => <h1>Error Page</h1>}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className={style.app}>
//       <Header />
//       <div className={style.container}>
//         <Menu />
//         <Main />
//       </div>
//     </div>
//   );
// }
