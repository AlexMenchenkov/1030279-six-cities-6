import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {propTypesCard} from '/src/prop-types.js';

const CardPlace = (props) => {
  const {
    offer,
    onHoverCard,
    id,
    classCard,
    width,
    height,
  } = props;

  const factorRate = 10;

  return <article onMouseOver={onHoverCard} id={id} className={`${classCard ? classCard + `__card ` : `cities__place-card`} place-card`}>
    {offer.isPremium ?
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      : ``
    }
    <div className={classCard + `__image-wrapper place-card__image-wrapper`}>
      <Link to={`/offer/${offer.id}`}>
        <img className="place-card__image" src={offer.previewImage} width={width} height={height}
          alt="Place image"/>
      </Link>
    </div>
    <div className={`${classCard ? classCard + `__card-info` : ``} place-card__info`}>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{offer.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className={`${classCard ? `place-card__bookmark-button--active` : ``} place-card__bookmark-button button`} type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"/>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: offer.rating * factorRate}}> </span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">{offer.title}</a>
      </h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  </article>;
};

CardPlace.propTypes = {
  onHoverCard: PropTypes.func,
  classCard: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  id: PropTypes.number,
  offer: PropTypes.shape(
      propTypesCard.isRequired,
  ),
};

export default CardPlace;
