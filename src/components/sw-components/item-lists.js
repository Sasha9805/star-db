import React from 'react';

import ItemList from '../item-list';
import { withData, withSwapiService } from "../hoc-helpers";

const withChildFunc = (fn) => (Wrapped) => {
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

const PersonList = withSwapiService(mapPersonMethodsToProps)(
                    withData(
                      withChildFunc(renderName)(ItemList)
                    )
                  );

const PlanetList = withSwapiService(mapPlanetMethodsToProps)(
                    withData(
                      withChildFunc(renderName)(ItemList)
                    )
                  );

const StarshipList = withSwapiService(mapStarshipMethodsToProps)(
                      withData(
                        withChildFunc(renderModelAndName)(ItemList)
                      )
                    );

export {
  PersonList,
  PlanetList,
  StarshipList
};