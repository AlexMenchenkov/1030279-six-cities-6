import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {propTypesCard} from '/src/prop-types';
import {FACTOR_RATE} from '/src/consts';
import {ActionCreator} from '/src/store/action';
import {changeFavoriteStatus} from '/src/store/api-actions';

const CardPlace = ({
  offer,
  id,
  width,
  height,
  maxWidth,
  saveOfferId,
  changeFavoritesStatusDispatch,
  handleLoadDataClick,
  isNotUpdateRoom,
  responseFavorites,
  needChangeMarker,
}) => {
  const handleMouseOver = (event) => {
    if (!needChangeMarker) {
      return;
    }
    const idOffer = Number(event.currentTarget.id);
    saveOfferId(idOffer);
  };

  const handleClick = (event) => {
    const idCard = Number(event.currentTarget.id);
    const status = Number(event.currentTarget.dataset.status);
    changeFavoritesStatusDispatch(idCard, status, isNotUpdateRoom, responseFavorites);
  };

  return <article onMouseOver={handleMouseOver} id={id} className="cities__place-card place-card">
    {offer.isPremium ?
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      : ``
    }
    <div className="place-card__image-wrapper">
      <Link onClick={handleLoadDataClick} to={`/offer/${offer.id}`}>
        <img className="place-card__image" src={offer.previewImage} width={width} height={height}
          alt="Place image"/>
      </Link>
      <div style={{maxWidth}} className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            onClick={handleClick}
            id={id}
            data-status={Number(!offer.isFavorite)}
            className={`${offer.isFavorite ?
              `place-card__bookmark-button--active` : ``} place-card__bookmark-button button`}
            type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(offer.rating) * FACTOR_RATE}%`}}> </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <span>{offer.title}</span>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </div>
  </article>;
};

CardPlace.propTypes = {
  maxWidth: PropTypes.number,
  isNotUpdateRoom: PropTypes.bool,
  needChangeMarker: PropTypes.bool,
  width: PropTypes.number,
  saveOfferId: PropTypes.func.isRequired,
  handleLoadDataClick: PropTypes.func,
  changeFavoritesStatusDispatch: PropTypes.func.isRequired,
  height: PropTypes.number,
  id: PropTypes.number,
  offer: PropTypes.shape(
      propTypesCard.isRequired,
  ),
  responseFavorites: PropTypes.arrayOf(
      PropTypes.shape(
          propTypesCard,
      ),
  ),
};

const mapStateToProps = (state) => ({
  cityChecked: state.cityChecked,
  needChangeMarker: state.needChangeMarker,
  isDataLoaded: state.isDataLoaded,
  offers: state.offers,
  responseFavorites: state.responseFavorites,
});

const mapDispatchToProps = (dispatch) => ({
  saveOfferId(id) {
    dispatch(ActionCreator.saveActiveIdForMap(id));
  },
  changeFavoritesStatusDispatch(id, status, isNotUpdateRoom, responseFavorites) {
    dispatch(changeFavoriteStatus(id, status, isNotUpdateRoom, responseFavorites));
  },
});

export {CardPlace};
export default connect(mapStateToProps, mapDispatchToProps)(CardPlace);
