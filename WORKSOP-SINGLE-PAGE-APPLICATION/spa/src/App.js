import { Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Categories from "./components/Categories/Categories";
import PetDetails from "./components/PetDetails/PetDetails";
import DemoPage from "./components/Demo";

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" exact component={Categories} />
        <Route path="/pets/details/:petId" component={PetDetails} />
        <Route path="/categories/:category" exact component={Categories} />
        <Route path="/demo" exact component={DemoPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
