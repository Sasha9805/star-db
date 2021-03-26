import React, { Component } from 'react';
import { PlanetList, PlanetDetails } from "../sw-components";
import Row from "../row";
import ErrorBoundary from "../error-boundary";

export default class PlanetsPage extends Component {

  state = {
    selectedItem: null,
    isPressed: false
  };

  onItemSelected = (selectedItem) => {
    this.setState({
      selectedItem,
      isPressed: true
    });
  };

  render() {

    const { selectedItem, isPressed } = this.state;

    return (
      <Row
        left={<PlanetList onItemSelected={this.onItemSelected}/>}
        right={
          <ErrorBoundary>
            <PlanetDetails itemId={selectedItem} isPressed={isPressed} />
          </ErrorBoundary>
        }
      />
    );
  }

};