import React from 'react';

import ItemDetails, { Record } from "../item-details";
import { withSwapiService } from '../hoc-helpers';

const PlanetDetails = ({itemId, swapiService}) => {
  const { getPlanet, getPlanetImage } = swapiService;
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

export default withSwapiService(PlanetDetails);