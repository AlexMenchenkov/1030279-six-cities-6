import React from 'react';
import CardPlace from '/src/components/card-place/card-place';
import {props} from './card-list-prop';

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

CardsList.propTypes = props;

export default React.memo(CardsList);
