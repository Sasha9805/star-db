import React, { Component } from 'react';

import './app.css';

import Header from '../header';
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import {Record} from "../item-details/item-details";
import ErrorBoundary from "../error-boundary";

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false
  };

  toggleRandomPlanet = () => {
    this.setState(state => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      };
    });
  };

  componentDidCatch(error, errorInfo) {
    this.setState({hasError: true});
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService;

    const personDetails = (
      <ItemDetails
        itemId={11}
        isPressed={false}
        getData={getPerson}
        getImageUrl={getPersonImage}
        fields={
          [
            {field: 'gender', label: 'Gender'},
            {field: 'eyeColor', label: 'Eye Color'},
            {field: 'birthYear', label: 'Birth Year'}
          ]
        }
      >

        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />

      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        isPressed={false}
        getData={getStarship}
        getImageUrl={getStarshipImage}
        fields={
          [
            {field: 'model', label: 'Model'},
            {field: 'manufacturer', label: 'Manufacturer'},
            {field: 'costInCredits', label: 'Cost in credits'}
          ]
        }
      />
    );

    return (
      <ErrorBoundary>
        <div className="app">

          <Header />
          {/*{planet}*/}

          {/*<div className="row mb-2 button-row">*/}
          {/*  <button*/}
          {/*    className="btn btn-lg btn-warning toggle-planet"*/}
          {/*    onClick={this.toggleRandomPlanet}>*/}
          {/*    Toggle*/}
          {/*  </button>*/}
          {/*  <ErrorButton />*/}
          {/*</div>*/}

          {/*<PeoplePage />*/}

          <Row left={personDetails} right={starshipDetails} />

          {/*<div className="row mb-2">*/}

          {/*  <div className="col-md-6">*/}
          {/*    <ItemList*/}
          {/*      onItemSelected={this.onItemSelected}*/}
          {/*      getData={this.swapiService.getAllPlanets}*/}
          {/*      renderItem={(item) => (*/}
          {/*        <span>{item.name} <button>!</button></span>*/}
          {/*      )}/>*/}
          {/*  </div>*/}
          {/*  <div className="col-md-6">*/}
          {/*    <ItemDetails*/}
          {/*      personId={this.state.selectedPerson}*/}
          {/*      isPressed={this.state.isPressed}/>*/}
          {/*  </div>*/}

          {/*</div>*/}

          {/*<div className="row mb-2">*/}

          {/*  <div className="col-md-6">*/}
          {/*    <ItemList*/}
          {/*      onItemSelected={this.onItemSelected}*/}
          {/*      getData={this.swapiService.getAllStarships}*/}
          {/*      renderItem={(item) => item.name}/>*/}
          {/*  </div>*/}
          {/*  <div className="col-md-6">*/}
          {/*    <ItemDetails*/}
          {/*      personId={this.state.selectedPerson}*/}
          {/*      isPressed={this.state.isPressed}/>*/}
          {/*  </div>*/}

          {/*</div>*/}

        </div>
      </ErrorBoundary>
    );

  }

}