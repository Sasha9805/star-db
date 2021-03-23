import React, { Component } from 'react';

import './people-page.css';
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBoundary from "../error-boundary";
import {Record} from "../item-details/item-details";

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

    const { getPerson, getPersonImage } = this.swapiService;

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
          getData={getPerson}
          getImageUrl={getPersonImage}
        >
          <Record field="gender" label="Gender" />
          <Record field="eyeColor" label="Eye Color" />
          <Record field="birthYear" label="Birth Year" />

        </ItemDetails>
      </ErrorBoundary>
    );

    return (
      <Row left={itemList} right={personDetails} />
    );

  }

}