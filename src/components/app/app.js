import React, { Component } from 'react';

import './app.css';

import Header from '../header';
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page";

export default class App extends Component {

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
    console.log('catch');
    this.setState({hasError: true});
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
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

        <PeoplePage />

        <PeoplePage />

        <PeoplePage />

      </div>
    );

  }

}