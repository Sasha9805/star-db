import React, { Component } from 'react';

import './person-details.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorButton from "../error-button";

export default class PersonDetails extends Component {

  swapiService = new SwapiService();

  state = {
    person: null,
    loading: true
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId } = this.props;

    if (!personId) {
      return;
    }

    this.setState({loading: true});

    this.swapiService
      .getPerson(personId)
      .then(person => {
        this.setState({
          person,
          loading: false
        });
      });
  }

  render() {

    const { person, loading } = this.state;
    const { isPressed } = this.props;
    let content;

    if (!person && !isPressed) {
      content = <span>Select a person from a list</span>;
    } else if (!person && isPressed) {
      content = <Spinner />;
    } else {
      content = loading ? <Spinner /> : <PersonInfo person={person} />;
    }

    // const content = loading ? <Spinner /> : <PersonInfo person={person} />;

    return (
      <div className="person-details card">

        {content}

      </div>
    );

  }

}

const PersonInfo = ({person}) => {

  const { name, id, gender, birthYear, eyeColor } = person;

  return(
    <React.Fragment>
      <img
        className="person-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt="person"
      />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
        <ErrorButton />
      </div>
    </React.Fragment>
  );
};