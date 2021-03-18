import React, { Component } from 'react';

import './app.css';

import Header from '../header';
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    selectedPerson: null
  };

  toggleRandomPlanet = () => {
    this.setState(state => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      };
    });
  };

  onItemSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {

    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <div className="app">

        <Header />
        {planet}

        <button
          className="btn btn-lg btn-warning toggle-planet"
          onClick={this.toggleRandomPlanet}>
          Toggle
        </button>

        <div className="row mb-2">

          <div className="col-md-6">
            <ItemList onItemSelected={this.onItemSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>

        </div>

      </div>
    );

  }

}