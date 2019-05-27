import React, { Component } from "react";
import { Input } from "antd";

class SearchBar extends Component {
  render() {
    return (
      <Input.Search
        className="searchBar"
        placeholder="Enter Query here"
        enterButton="Search"
        size="large"
        onSearch={value => this.props.onSearchHandler(value)}
      />
    );
  }
}

export default SearchBar;
