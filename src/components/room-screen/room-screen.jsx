import PropTypes from "prop-types";
import React, {useEffect} from 'react';
import Header from '/src/components/header/header';
import ReviewBlock from '/src/components/review-block/review-block';
import {connect} from "react-redux";
import {propTypesCard, propTypesComments} from '/src/prop-types';
import {fetchActiveIdForMap, getComments, fetchNearbyOffers, changeFavoriteStatus} from '/src/store/api-actions';
import {ZERO, FACTOR_RATE, styleMapRoom} from '/src/consts';
import LoadingScreen from '/src/components/loading-screen/loading-screen';
import Map from '/src/components/map/map';
import CardsList from '/src/components/cards-list/cards-list';
import {ActionCreator} from '/src/store/action';

const RoomScreen = ({
  offer,
  offerNearby,
  isRoomLoaded,
  onLoadData,
  onLoadComments,
  comments,
  isCommentsLoaded,
  isNearbyLoaded,
  clearDataRoomDispatch,
  responseFavorites,
  changeFavoritesStatusDispatch,
}) => {
  const THIRD_ITEM_IN_PATH = 2;
  const offerId = Number(window.location.pathname.split(`/`)[THIRD_ITEM_IN_PATH]);

  const handleLoadDataClick = (event) => {
    const id = Number(event.currentTarget.getAttribute(`href`).split(`/`)[THIRD_ITEM_IN_PATH]);
    onLoadData(id);
    onLoadComments(id);
    window.scrollTo({
      top: ZERO,
      left: ZERO,
      behavior: `smooth`
    });
  };

  const handleAddFavoriteClick = (event) => {
    const status = Number(event.currentTarget.dataset.status);
    changeFavoritesStatusDispatch(offerId, status, true, responseFavorites);
  };

  useEffect(() => {
    if (!isRoomLoaded) {
      onLoadData(offerId);
    }
    onLoadComments(offerId);

    return () => {
      clearDataRoomDispatch(false);
    };
  }, []);

  if (!isRoomLoaded || (!isCommentsLoaded || !isNearbyLoaded)) {
    return (
      <LoadingScreen />
    );
  }
  let offersForCardList = offerNearby.filter((room) => room.id !== offer.id);

  if (responseFavorites.length) {
    responseFavorites.forEach((favorite) => {
      offersForCardList = offersForCardList.map((offerForCard) => {
        if (offerForCard.id === favorite.id) {
          return favorite;
        }
        return offerForCard;
      });
    });
    const offerUpFavorite = responseFavorites.filter((elem) => elem.id === offer.id);
    if (offerUpFavorite.length) {
      offer = offerUpFavorite[ZERO];
    }
  }

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.images.map((img, key) => {
                return (<div key={key} className="property__image-wrapper">
                  <img className="property__image" src={img} alt="Photo studio"/>
                </div>);
              })}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.isPremium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div>
                : ``
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
                <button onClick={handleAddFavoriteClick} data-status={Number(!offer.isFavorite)} className={`${offer.isFavorite ? `property__bookmark-button--active` : `property__bookmark-button`} button`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${(Math.round(offer.rating) * FACTOR_RATE)}%`}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{Math.round(offer.rating)}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">{offer.price}&euro;</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer.goods.map((good, key) => {
                    return (<li key={key} className="property__inside-item">
                      {good}
                    </li>);
                  })}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`${offer.host.isPro ? `property__avatar-wrapper--pro` : ``} property__avatar-wrapper user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74"
                      alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {offer.host.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <ReviewBlock comments={comments}/>
            </div>
          </div>
          <section className="property__map map">
            <Map
              offers={offerNearby}
              styleMap={styleMapRoom}
              roomId={offerId}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <CardsList
                offers={offersForCardList}
                handleLoadDataClick={handleLoadDataClick}
                isNotUpdateRoom={true}
                needChangeMarker={false}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

RoomScreen.propTypes = {
  offerNearby: PropTypes.arrayOf(
      PropTypes.shape(
          propTypesCard,
      ),
  ),
  offer: PropTypes.shape(
      propTypesCard,
  ),
  responseFavorites: PropTypes.arrayOf(
      PropTypes.shape(
          propTypesCard,
      ),
  ),
  isRoomLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
  saveOfferId: PropTypes.func.isRequired,
  clearDataRoomDispatch: PropTypes.func.isRequired,
  onLoadComments: PropTypes.func.isRequired,
  isCommentsLoaded: PropTypes.bool.isRequired,
  isNearbyLoaded: PropTypes.bool.isRequired,
  changeFavoritesStatusDispatch: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(
      PropTypes.shape(
          propTypesComments
      ),
  ),
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  isRoomLoaded: state.isRoomLoaded,
  isNearbyLoaded: state.isNearbyLoaded,
  responseFavorites: state.responseFavorites,
  offer: state.offer,
  offerNearby: state.offerNearby,
  comments: state.comments,
  isCommentsLoaded: state.isCommentsLoaded,
  changeFavoritesStatusDispatch: state.changeFavoritesStatusDispatch,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData(offerId) {
    dispatch(fetchActiveIdForMap(offerId))
      .then(() => dispatch(fetchNearbyOffers(offerId)));
  },
  onLoadComments(offerId) {
    dispatch(getComments(offerId));
  },
  saveOfferId(id) {
    dispatch(ActionCreator.saveActiveIdForMap(id));
  },
  clearDataRoomDispatch(needChangeMarker) {
    dispatch(ActionCreator.clearDataRoom(needChangeMarker));
  },
  changeFavoritesStatusDispatch(id, status, isNotUpdateRoom, responseFavorites) {
    dispatch(changeFavoriteStatus(id, status, isNotUpdateRoom, responseFavorites));
  },
});

export {RoomScreen};
export default connect(mapStateToProps, mapDispatchToProps)(RoomScreen);
