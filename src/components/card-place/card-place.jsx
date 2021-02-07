import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export const CardPlace = (props) => {
  const {room} = props;

  return <article className="cities__place-card place-card">
    {room.isPremium ?
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      : ``
    }
    <div className="cities__image-wrapper place-card__image-wrapper">
      <Link to={`/offer/${room.id}`}>
        <img className="place-card__image" src={room.img} width="260" height="200"
          alt="Place image"/>
      </Link>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{room.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className="place-card__bookmark-button button" type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: room.rate}}> </span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">{room.title}</a>
      </h2>
      <p className="place-card__type">{room.type}</p>
    </div>
  </article>;
};

export const getPropTypesCard = () => {
  return (
    {
      img: PropTypes.string.isRequired,
      isPremium: PropTypes.bool.isRequired,
      price: PropTypes.number.isRequired,
      rate: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }
  );
};

CardPlace.propTypes = getPropTypesCard;
