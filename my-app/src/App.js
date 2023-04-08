import React from "react";
import users from "./Users";
import SearchBox from "./SearchBox";
import CardList from "./CardList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: users,
      searchField: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filterRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>Robort Frindes</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filterRobots} />;
      </div>
    );
  }
}
export default App;
