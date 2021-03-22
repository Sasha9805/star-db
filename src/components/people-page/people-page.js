import React, { Component } from 'react';

import './people-page.css';
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";

export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: null,
    isPressed: false,
    hasError: false
  };

  componentDidCatch(error, errorInfo) {
    console.log(typeof error);
    console.log(error.name);
    console.log(errorInfo);
    this.setState({hasError: true});
  }

  onItemSelected = id => {
    this.setState({
      selectedPerson: id,
      isPressed: true
    });
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <div className="row mb-2">

        <div className="col-md-6">
          <ItemList
            onItemSelected={this.onItemSelected}
            getData={this.swapiService.getAllPeople}
            renderItem={({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})`}/>
        </div>
        <div className="col-md-6">
          <PersonDetails
            personId={this.state.selectedPerson}
            isPressed={this.state.isPressed}/>
        </div>

      </div>
    );

  }

}