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
    const filterRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    console.log(filterRobots);
  };

  render() {
    return (
      <div className="tc">
        <h1>Robort Frindes</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={this.state.robots} />;
      </div>
    );
  }
}
export default App;
