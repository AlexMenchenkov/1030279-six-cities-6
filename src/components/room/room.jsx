import PropTypes from "prop-types";
import React, {useEffect} from 'react';
import Header from '/src/components/header/header.jsx';
import ReviewBlock from '/src/components/review-block/review-block.jsx';
import {connect} from "react-redux";
import {propTypesCard, propTypesComments} from '/src/prop-types.js';
import {fetchCurrentOffer, getComments, fetchNearbyOffers} from '/src/store/api-actions.js';
import {ZERO, FACTOR_RATE, styleMapRoom} from '/src/consts.js';
import LoadingScreen from '/src/components/loading-screen/loading-screen.js';
import Map from '/src/components/map/map.jsx';
import CardsList from '/src/components/cards-list/cards-list.jsx';

const Room = ({
  offers,
  offer,
  offerNearby,
  isRoomLoaded,
  isDataLoaded,
  onLoadData,
  onLoadComments,
  comments,
  isCommentsLoaded,
  isNearbyLoaded,
  onLoadNearby,
  currentOffer,
}) => {
  const THIRD_ITEM_IN_PATH = 2;
  const offerId = Number(window.location.pathname.split(`/`)[THIRD_ITEM_IN_PATH]);

  const handleClick = () => {
    onLoadData(currentOffer);
    onLoadComments(currentOffer);
    onLoadNearby(currentOffer);
    window.scrollTo({
      top: ZERO,
      left: ZERO,
      behavior: `smooth`
    });
  };

  useEffect(() => {
    if (!isRoomLoaded && !isDataLoaded) {
      onLoadData(offerId);
    }
    onLoadComments(offerId);
    onLoadNearby(offerId);
  }, []);

  // useEffect(() => {
  //   // if (!isRoomLoaded && !isDataLoaded) {
  //   //   onLoadData(offerId, true);
  //   // }
  //   onLoadComments(offerId, false);
  //   onLoadNearby(offerId, false);
  // }, [currentOffer]);

  if (!isRoomLoaded && !isDataLoaded || (!isCommentsLoaded || !isNearbyLoaded)) {
    return (
      <LoadingScreen />
    );
  }

  let actualOffer;
  if (offer) {
    actualOffer = offer;
  } else {
    actualOffer = offers.filter((elem) => elem.id === offerId)[ZERO];
  }

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {actualOffer.images.map((img, key) => {
                return (<div key={key} className="property__image-wrapper">
                  <img className="property__image" src={img} alt="Photo studio"/>
                </div>);
              })}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {actualOffer.isPremium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div>
                : ``
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {actualOffer.title}
                </h1>
                <button className={`${actualOffer.isFavorite ? `property__bookmark-button--active` : `property__bookmark-button`} button`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${(Math.round(actualOffer.rating) * FACTOR_RATE)}%`}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{Math.round(actualOffer.rating)}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {actualOffer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {actualOffer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {actualOffer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">{actualOffer.price}&euro;</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {actualOffer.goods.map((good, key) => {
                    return (<li key={key} className="property__inside-item">
                      {good}
                    </li>);
                  })}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`${actualOffer.host.isPro ? `property__avatar-wrapper--pro` : ``} property__avatar-wrapper user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={actualOffer.host.avatarUrl} width="74" height="74"
                      alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {actualOffer.host.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {actualOffer.description}
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
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div onClick={handleClick} className="near-places__list places__list">
              <CardsList offers={offerNearby}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

Room.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(
          propTypesCard,
      ),
  ),
  offerNearby: PropTypes.arrayOf(
      PropTypes.shape(
          propTypesCard,
      ),
  ),
  offer: PropTypes.shape(
      propTypesCard,
  ),
  isRoomLoaded: PropTypes.bool.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
  onLoadNearby: PropTypes.func.isRequired,
  onLoadComments: PropTypes.func.isRequired,
  isCommentsLoaded: PropTypes.bool.isRequired,
  isNearbyLoaded: PropTypes.bool.isRequired,
  currentOffer: PropTypes.number,
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
  onLoadNearby: state.onLoadNearby,
  isDataLoaded: state.isDataLoaded,
  offer: state.offer,
  offerNearby: state.offerNearby,
  currentOffer: state.currentOffer,
  comments: state.comments,
  isCommentsLoaded: state.isCommentsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData(offerId) {
    dispatch(fetchCurrentOffer(offerId));
  },
  onLoadNearby(offerId) {
    dispatch(fetchNearbyOffers(offerId));
  },
  onLoadComments(offerId) {
    dispatch(getComments(offerId));
  },
});

export {Room};
export default connect(mapStateToProps, mapDispatchToProps)(Room);
