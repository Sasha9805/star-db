import React from 'react';

import ItemList from '../item-list';
import withData from "../hoc-helpers";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

const {
  getAllPeople,
  getAllPlanets,
  getAllStarships
} = swapiService;

const withChildFunc = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  };
};

const renderName = ({name}) => <span>{name}</span>;
const renderModelAndName = ({model, name}) => <span>{name} ({model})</span> ;

const PersonList = withData(
  withChildFunc(ItemList, renderName),
  getAllPeople
);

const PlanetList = withData(
  withChildFunc(ItemList, renderName),
  getAllPlanets
);

const StarshipList = withData(
  withChildFunc(ItemList, renderModelAndName),
  getAllStarships
);

export {
  PersonList,
  PlanetList,
  StarshipList
};