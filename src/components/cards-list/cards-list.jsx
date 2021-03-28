import PropTypes from "prop-types";
import React from 'react';
import CardPlace from '/src/components/card-place/card-place';

const CardsList = ({handleLoadDataClick, isNotUpdateRoom, needChangeMarker, getOffers}) => {
  return (<>
    {getOffers().map((offer) => {
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
  handleLoadDataClick: PropTypes.func,
  getOffers: PropTypes.func,
  isNotUpdateRoom: PropTypes.bool,
  needChangeMarker: PropTypes.bool,
};

export default React.memo(CardsList);
