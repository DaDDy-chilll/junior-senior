import { useState, useEffect } from "react";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import CardList from "../components/CardList";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

function App() {
  const [robots, setRobots] = useState([]);
  const [search, setSearch] = useState("");
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: [],
  //     searchField: "",
  //   };
  // }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);
  console.log(robots);
  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => this.setState({ robots: users }));
  // }

  const onSearchChange = (event) => {
    // this.setState({ searchField: event.target.value });
    setSearch(event.target.value);
  };

  // const { robots, searchField } = this.state;
  const filterRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(search.toLowerCase());
  });
  return !robots.length ? (
    <h1 className="tc">Loading...</h1>
  ) : (
    <div className="tc">
      <h1>Robort Frindes</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filterRobots} />;
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}

export default App;
