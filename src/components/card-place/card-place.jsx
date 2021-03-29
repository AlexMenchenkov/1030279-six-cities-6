import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {getRatingWidth} from '/src/utils';
import {saveActiveIdForMap} from '/src/store/action';
import {changeFavoriteStatus} from '/src/store/api-actions';
import {props} from './card-place-prop';

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
    changeFavoritesStatusDispatch(idCard, status, isNotUpdateRoom);
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
            <span style={{width: getRatingWidth(offer.rating)}}> </span>
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

CardPlace.propTypes = props;

const mapStateToProps = ({USER, DATA}) => ({
  cityChecked: USER.cityChecked,
  isDataLoaded: DATA.isDataLoaded,
  offers: DATA.offers,
});

const mapDispatchToProps = (dispatch) => ({
  saveOfferId(id) {
    dispatch(saveActiveIdForMap(id));
  },
  changeFavoritesStatusDispatch(id, status, isNotUpdateRoom) {
    dispatch(changeFavoriteStatus(id, status, isNotUpdateRoom));
  },
});

export {CardPlace};
export default React.memo(connect(mapStateToProps, mapDispatchToProps)(CardPlace));
