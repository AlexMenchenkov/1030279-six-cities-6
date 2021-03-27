import PropTypes from "prop-types";
import React from 'react';
import CardPlace from '/src/components/card-place/card-place';
import {propTypesCard} from '/src/prop-types';

const CardsList = ({offers, handleLoadDataClick, isNotUpdateRoom, needChangeMarker}) => {

  return (<>
    {offers.map((offer) => {
      return (
        <CardPlace
          offer={offer}
          key={offer.id}
          id={offer.id}
          handleLoadDataClick={handleLoadDataClick}
          isNotUpdateRoom={isNotUpdateRoom}
          needChangeMarker={needChangeMarker}
        />
      );
    })}
  </>
  );
};

CardsList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(
          propTypesCard,
      ),
  ),
  handleLoadDataClick: PropTypes.func,
  isNotUpdateRoom: PropTypes.bool,
  needChangeMarker: PropTypes.bool,
};

export default CardsList;
