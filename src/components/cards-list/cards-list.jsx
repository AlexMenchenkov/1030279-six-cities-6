import PropTypes from "prop-types";
import React, {useState} from 'react';
import CardPlace from '/src/components/card-place/card-place.jsx';
import {propTypesCard} from '/src/prop-types.js';

const CardsList = (props) => {
  const {offers, cityChecked} = props;
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
          offer={offer[cityChecked]}
          key={offer[cityChecked].id}
          id={offer[cityChecked].id}
          onHoverCard={handleHover}
        />
      );
    })}
  </>
  );
};

CardsList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.objectOf(PropTypes.shape(
          propTypesCard,
      )),
  ).isRequired,
  cityChecked: PropTypes.string.isRequired,
};

export default CardsList;
