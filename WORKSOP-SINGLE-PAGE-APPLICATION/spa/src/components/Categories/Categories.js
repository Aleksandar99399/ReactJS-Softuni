import { Component } from "react";

import Pet from "../Pet/Pet";
import CategoryNav from "./CategoryNav/CategoryNav";
import * as petService from "../../services/petService";

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: [],
      currentCategory: "all",
    };
  }

  componentDidMount() {
    petService.getAll().then((pets) => this.setState({ pets }));
  }

  componentDidUpdate(prevProps) {
    let category = this.props.match.params.category;

    if (prevProps.match.params.category == category) {
      return;
    }

    petService.getAll(category).then((pets) => {
      this.setState({
        pets: pets,
        currentCategory: category,
      });
    });
  }

  render() {
    return (
      <section className="dashboard">
        <h1>Dashboard</h1>

        <CategoryNav />

        <ul className="other-pets-list">
          {this.state.pets.map((x) => (
            <Pet key={x.id} {...x} />
          ))}
        </ul>
      </section>
    );
  }
}

export default Categories;

//   const [pets, setPets] = useState();

//   useEffect(() => {
//     fetch("http://localhost:5000/pets")
//       .then((res) => res.json())
//       .then((res) => setPets(res));
//   }, []);

//   console.log(pets);
