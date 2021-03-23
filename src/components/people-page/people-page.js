import React, { Component } from 'react';

import './people-page.css';
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBoundary from "../error-boundary";

export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: null,
    isPressed: false,
  };

  onItemSelected = id => {
    this.setState({
      selectedPerson: id,
      isPressed: true
    });
  };

  render() {

    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.swapiService.getAllPeople}
        // renderItem={({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})`}
      >
        { (i) => (
          `${i.name} (${i.birthYear})`
        )}
      </ItemList>
    );

    const personDetails = (
      <ErrorBoundary>
        <ItemDetails
          itemId={this.state.selectedPerson}
          isPressed={this.state.isPressed}
        />
      </ErrorBoundary>
    );

    return (
      <Row left={itemList} right={personDetails} />
    );

  }

}