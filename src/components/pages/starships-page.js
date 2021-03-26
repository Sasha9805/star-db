import React, { Component } from 'react';
import { StarshipList, StarshipDetails } from "../sw-components";
import Row from "../row";
import ErrorBoundary from "../error-boundary";

export default class StarshipsPage extends Component {

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
        left={<StarshipList onItemSelected={this.onItemSelected}/>}
        right={
          <ErrorBoundary>
            <StarshipDetails itemId={selectedItem} isPressed={isPressed} />
          </ErrorBoundary>
        }
      />
    );
  }

};