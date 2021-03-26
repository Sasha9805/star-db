import React, { Component } from 'react';
import { PersonList, PersonDetails } from "../sw-components";
import Row from "../row";
import ErrorBoundary from "../error-boundary";

export default class PeoplePage extends Component {

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
        left={<PersonList onItemSelected={this.onItemSelected}/>}
        right={
          <ErrorBoundary>
            <PersonDetails itemId={selectedItem} isPressed={isPressed} />
          </ErrorBoundary>
        }
      />
    );
  }

};