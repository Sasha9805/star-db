import React from 'react';

import ItemList from '../item-list';
import { withData, withSwapiService } from "../hoc-helpers";

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

const mapPersonMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPeople
  };
};

const mapPlanetMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPlanets
  };
};

const mapStarshipMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllStarships
  };
};

const PersonList = withSwapiService(
  withData(
    withChildFunc(ItemList, renderName)
  ),
  mapPersonMethodsToProps
);

const PlanetList = withSwapiService(
  withData(
    withChildFunc(ItemList, renderName)
  ),
  mapPlanetMethodsToProps
);

const StarshipList = withSwapiService(
  withData(
    withChildFunc(ItemList, renderModelAndName)
  ),
  mapStarshipMethodsToProps
);

export {
  PersonList,
  PlanetList,
  StarshipList
};