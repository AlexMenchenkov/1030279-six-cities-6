import React from 'react';
import CardPlace from '/src/components/card-place/card-place';
import {sizeCard} from '/src/consts';
import {props} from './favorite-city-list-prop';

const FavoriteCityList = ({favoriteOffers, city}) => {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {favoriteOffers.map((offer) => {
          return (
            <CardPlace
              offer={offer}
              key={offer.id}
              id={offer.id}
              width={sizeCard.width}
              height={sizeCard.height}
              maxWidth={sizeCard.maxWidth}
            />
          );
        })}
      </div>
    </li>
  );
};

FavoriteCityList.propTypes = props;

export default FavoriteCityList;
