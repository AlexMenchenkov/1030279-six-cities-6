import React, {useEffect, useCallback} from 'react';
import Header from '/src/components/header/header';
import ReviewBlock from '/src/components/review-block/review-block';
import {connect} from "react-redux";
import {fetchActiveIdForMap, getComments, fetchNearbyOffers, changeFavoriteStatus} from '/src/store/api-actions';
import {ZERO, styleMapRoom, THIRD_ITEM_IN_PATH} from '/src/consts';
import {getRatingWidth} from '/src/utils';
import LoadingScreen from '/src/components/loading-screen/loading-screen';
import Map from '/src/components/map/map';
import CardsList from '/src/components/cards-list/cards-list';
import {clearDataRoom} from '/src/store/action';
import {
  getIsRoomLoaded,
  getIsNearbyLoaded,
  getResponseFavorites,
  getOffer,
  getOfferNearby,
  getCommentsStore,
  getIsCommentsLoaded,
  getOfferNearbyForCardList,
} from '/src/store/data/selectors';
import {props} from './room-screen-prop';

const RoomScreen = ({
  offer,
  offerNearbyStore,
  isRoomLoaded,
  onLoadData,
  onLoadComments,
  comments,
  isCommentsLoaded,
  isNearbyLoaded,
  clearDataRoomDispatch,
  responseFavorites,
  changeFavoritesStatusDispatch,
  offerNearbyForCardList,
}) => {
  const offerId = Number(window.location.pathname.split(`/`)[THIRD_ITEM_IN_PATH]);
  const handleLoadDataClick = useCallback((event) => {
    const id = Number(event.currentTarget.getAttribute(`href`).split(`/`)[THIRD_ITEM_IN_PATH]);
    onLoadData(id);
    onLoadComments(id);
    window.scrollTo({
      top: ZERO,
      left: ZERO,
      behavior: `smooth`
    });
  }, [offerNearbyStore]);

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

  const offerNearby = useCallback(offerNearbyStore, [offerNearbyStore]);

  if (!isRoomLoaded || (!isCommentsLoaded || !isNearbyLoaded)) {
    return (
      <LoadingScreen />
    );
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
                  <span style={{width: getRatingWidth(offer.rating)}}/>
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
                offers={offerNearbyForCardList}
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

RoomScreen.propTypes = props;

const mapStateToProps = (state) => ({
  isRoomLoaded: getIsRoomLoaded(state),
  isNearbyLoaded: getIsNearbyLoaded(state),
  responseFavorites: getResponseFavorites(state),
  offer: getOffer(state),
  offerNearbyStore: getOfferNearby(state),
  comments: getCommentsStore(state),
  isCommentsLoaded: getIsCommentsLoaded(state),
  offerNearbyForCardList: getOfferNearbyForCardList(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData(offerId) {
    dispatch(fetchActiveIdForMap(offerId))
      .then(() => dispatch(fetchNearbyOffers(offerId)));
  },
  onLoadComments(offerId) {
    dispatch(getComments(offerId));
  },
  clearDataRoomDispatch(needChangeMarker) {
    dispatch(clearDataRoom(needChangeMarker));
  },
  changeFavoritesStatusDispatch(id, status, isNotUpdateRoom, responseFavorites) {
    dispatch(changeFavoriteStatus(id, status, isNotUpdateRoom, responseFavorites));
  },
});

export {RoomScreen};
export default connect(mapStateToProps, mapDispatchToProps)(RoomScreen);
