import React, { Component } from 'react';

import './app.css';

import Header from '../header';
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import Row from "../row";
import {Record} from "../item-details/item-details";
import ErrorBoundary from "../error-boundary";
import ItemList from "../item-list";
import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from "../sw-components";
import { SwapiServiceProvider } from "../swapi-service-context";

export default class App extends Component {

  swapiService = new DummySwapiService();

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

    const { getPerson, getStarship, getPersonImage, getStarshipImage, getAllPlanets } = this.swapiService;

    const personDetails = (
      <ItemDetails
        itemId={11}
        isPressed={false}
        getData={getPerson}
        getImageUrl={getPersonImage}
      >

        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
        <Record field="birthYear" label="Birth Year" />

      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        isPressed={false}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >

        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />

      </ItemDetails>
    );

    return (
      <ErrorBoundary>

        <SwapiServiceProvider value={this.swapiService}>
          <div className="app">

            <Header />
            {planet}

            <div className="row mb-2 button-row">
              <button
                className="btn btn-lg btn-warning toggle-planet"
                onClick={this.toggleRandomPlanet}>
                Toggle
              </button>
              <ErrorButton />
            </div>

            <PersonDetails itemId={12} />

            <PlanetDetails itemId={5} />

            <StarshipDetails itemId={9} />

            <PersonList />

            <PlanetList />

            <StarshipList />

            {/*<PeoplePage />*/}

            {/*<Row left={personDetails} right={starshipDetails} />*/}

          </div>
        </SwapiServiceProvider>

      </ErrorBoundary>
    );

  }

}