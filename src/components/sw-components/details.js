import React from 'react';

import ItemDetails, { Record } from "../item-details";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

const {
  getStarship,
  getStarshipImage,
  getPerson,
  getPersonImage,
  getPlanet,
  getPlanetImage
} = swapiService;

const PersonDetails = ({itemId, isPressed}) => {
  return (
    <ItemDetails
      itemId={itemId}
      isPressed={isPressed}
      getData={getPerson}
      getImageUrl={getPersonImage}
    >

      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
      <Record field="birthYear" label="Birth Year" />

    </ItemDetails>
  );
};

const PlanetDetails = ({itemId}) => {
  return (
    <ItemDetails
      itemId={itemId}
      isPressed={false}
      getData={getPlanet}
      getImageUrl={getPlanetImage}
    >

      <Record field="diameter" label="Diameter" />
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />

    </ItemDetails>
  );
};

const StarshipDetails = ({itemId}) => {
  return (
    <ItemDetails
      itemId={itemId}
      isPressed={false}
      getData={getStarship}
      getImageUrl={getStarshipImage}
    >

      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />

    </ItemDetails>
  );
};

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
};