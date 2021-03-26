import React, { Component } from 'react';

import './app.css';

import Header from '../header';
import RandomPlanet from "../random-planet";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import ErrorBoundary from "../error-boundary";
import { SwapiServiceProvider } from "../swapi-service-context";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";

export default class App extends Component {

  state = {
    swapiService: new SwapiService()
  };

  onServiceChange = () => {
    this.setState(({swapiService}) => {
      const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      return {
        swapiService: new Service()
      };
    });
  };

  render() {

    return (
      <ErrorBoundary>

        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="app">

            <Header onServiceChange={this.onServiceChange} />
            <RandomPlanet />

            <PeoplePage />

            <PlanetsPage />

            <StarshipsPage />

          </div>
        </SwapiServiceProvider>

      </ErrorBoundary>
    );

  }

}