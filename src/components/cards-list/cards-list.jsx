import PropTypes from "prop-types";
import React, {useState} from 'react';
import {CardPlace} from '/src/components/card-place/card-place.jsx';
import {propTypesCard} from '/src/prop-types.js';

const CardsList = (props) => {
  const {offers} = props;
  // eslint-disable-next-line no-unused-vars
  const [hoverElement, setHoverTarget] = useState(null);

  const handleHover = (event) => {
    const {id} = event.currentTarget;
    setHoverTarget(id);
  };

  return (<>
    {offers.map((offer) => {
      return (
        <CardPlace
          offer={offer}
          key={offer.id}
          id={offer.id}
          onHoverCard={handleHover}
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
  ).isRequired,
};

export default CardsList;
