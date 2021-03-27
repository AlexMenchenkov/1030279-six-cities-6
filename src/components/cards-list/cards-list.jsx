import PropTypes from "prop-types";
import React from 'react';
import CardPlace from '/src/components/card-place/card-place.jsx';
import {propTypesCard} from '/src/prop-types.js';

const CardsList = ({offers, onClickCardhandler, isNotUpdateRoom}) => {

  return (<>
    {offers.map((offer) => {
      return (
        <CardPlace
          offer={offer}
          key={offer.id}
          id={offer.id}
          onClickCardhandler={onClickCardhandler}
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
  onClickCardhandler: PropTypes.func,
  isNotUpdateRoom: PropTypes.bool,
};

export default CardsList;
