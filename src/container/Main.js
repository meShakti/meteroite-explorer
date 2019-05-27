import React, { Component } from "react";
import axios from "axios";
import { Row, Col } from "antd";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import MeteorList from "../components/MeteorList/MeteorList";
import CONSTANTS from "../constants";


/**
 * Main module for search functionality
 */
class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
        searchResults: [],
        searchTerm: "",
        isDataLoaded: false
      };
      this.allSearchResults = [];
    }
  
    onSearchHandler = searchTerm => {
      this.setState({ searchTerm: searchTerm });
      this.updateSearchResults(searchTerm);
    };
  
    componentDidMount() {
      axios.get(CONSTANTS.NASA_API).then(res => {
        this.allSearchResults = res.data;
        this.setState({
          searchResults: this.allSearchResults,
          isDataLoaded: true
        });
      });
    }
  
    updateSearchResults = searchTerm => {
      this.setState(() => {
        const matchedResults = this.allSearchResults.filter(row => {
          return row.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
        });
        return { searchResults: matchedResults };
      });
    };
  
    render() {
      return (
        <div className="App">
          <Row className="titleRow">
            <Col span={24}>
              <Header />
            </Col>
          </Row>
          <Row>
            <Col lg={{ span: 8, offset: 8 }} xs={{ span: 22, offset: 1 }}>
              <SearchBar onSearchHandler={this.onSearchHandler} />
            </Col>
          </Row>
          <Row>
            <Col lg={{ span: 22, offset: 1 }}>
              <MeteorList
                searchResults={this.state.searchResults}
                isDataLoaded={this.state.isDataLoaded}
              />
            </Col>
          </Row>
        </div>
      );
    }
  }
  
  export default Main;
  