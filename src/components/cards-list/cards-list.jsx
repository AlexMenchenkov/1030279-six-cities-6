import PropTypes from "prop-types";
import React from 'react';
import CardPlace from '/src/components/card-place/card-place';
import {propTypesCard} from '/src/prop-types';

const CardsList = ({offers, handleCardClick, isNotUpdateRoom}) => {

  return (<>
    {offers.map((offer) => {
      return (
        <CardPlace
          offer={offer}
          key={offer.id}
          id={offer.id}
          handleCardClick={handleCardClick}
          isNotUpdateRoom={isNotUpdateRoom}
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
  handleCardClick: PropTypes.func,
  isNotUpdateRoom: PropTypes.bool,
};

export default CardsList;
