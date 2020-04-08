import React from "react";

import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit(term) {}
  render() {
    return (
      <div className="ui container" style={{ marginTop: "50px" }}>
        <SearchBar onsubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
