import React from 'react';

import ItemDetails, { Record } from "../item-details";
import { SwapiServiceConsumer } from "../swapi-service-context";

const PersonDetails = ({itemId, isPressed}) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getPerson, getPersonImage }) => {
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
        }
      }
    </SwapiServiceConsumer>
  );
};

const PlanetDetails = ({itemId}) => {
  return (
    <SwapiServiceConsumer>
      {
        ({getPlanet, getPlanetImage}) => {
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
        }
      }
    </SwapiServiceConsumer>
  );
};

const StarshipDetails = ({itemId}) => {
  return (
    <SwapiServiceConsumer>
      {
        ({getStarship, getStarshipImage}) => {
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
        }
      }
    </SwapiServiceConsumer>
  );
};

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
};