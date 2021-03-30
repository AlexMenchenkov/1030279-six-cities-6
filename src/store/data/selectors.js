import {sectionsId, ZERO} from '/src/consts';
import {nameSpace} from '/src/store/root-reducer';
import {getCityCheckedSelector, getSortIdSelector} from '/src/store/user/selectors';
import {sortByHigthToLow, sortByPriceLowToHigth} from '/src/utils';
import {createSelector} from 'reselect';

export const getOffersSelector = (state) => {
  let filteredOffersOnCity = state[nameSpace.DATA].offers.filter((offer) => offer.city.name === getCityCheckedSelector(state));
  let sortOffersData = filteredOffersOnCity;
  const sortOffersFunc = () => {
    switch (getSortIdSelector(state)) {
      case sectionsId.popular :
        return filteredOffersOnCity;
      case sectionsId.highToLow :
        return sortOffersData.sort(sortByPriceLowToHigth);
      case sectionsId.lowToHigh :
        return sortOffersData.sort(sortByHigthToLow(`price`));
      case sectionsId.rate :
        return sortOffersData.sort(sortByHigthToLow(`rating`));
      default: {
        return filteredOffersOnCity;
      }
    }
  };

  sortOffersData = sortOffersFunc();
  if (getResponseFavoritesSelector(state).length) {
    getResponseFavoritesSelector(state).forEach((favorite) => {
      filteredOffersOnCity = filteredOffersOnCity.map((offer) => {
        if (offer.id === favorite.id) {
          return favorite;
        }
        return offer;
      });
    });
  }
  return filteredOffersOnCity;
};

const offersForMapSelector = () => {
  return (
    (offers) => {
      const points = offers.map((offer) => [offer.location, {id: offer.id}]);
      const location = offers.map((offer) => offer.city.location);
      const titles = offers.map((offer) => offer.title);
      const coordinatesCity = location.filter(((offer) => ({id}) => !offer.has(id) && offer.add(id))(new Set()));
      const [latitude] = coordinatesCity.map((offer) => offer.latitude);
      const [longitude] = coordinatesCity.map((offer) => offer.longitude);
      const [zoom] = coordinatesCity.map((offer) => offer.zoom);

      return {
        points,
        titles,
        latitude,
        longitude,
        zoom,
      };
    }
  );
};

export const getOfferNearbySelector = (state) => state[nameSpace.DATA].offerNearby;
export const getOffersSelectorForMapMain = createSelector(
    getOffersSelector,
    offersForMapSelector,
    (offers, func) => func(offers)
);

export const getOffersSelectorForMapRoom = createSelector(
    getOfferNearbySelector,
    offersForMapSelector,
    (offers, func) => func(offers)
);

export const getResponseFavoritesSelector = (state) => state[nameSpace.DATA].responseFavorites;
export const getIsDataLoadedSelector = (state) => state[nameSpace.DATA].isDataLoaded;
export const getFavoritesSelector = (state) => state[nameSpace.DATA].favoritesList;
export const getIsFavoritesLoadedSelector = (state) => state[nameSpace.DATA].isFavoritesLoaded;

export const getUniqueCityesSelector = createSelector(
    getFavoritesSelector,
    (favoritesList) => {
      const cityesArray = favoritesList.map((offer) => offer.city.name);
      return [...new Set(cityesArray)];
    }
);

export const getIsNearbyLoadedSelector = (state) => state[nameSpace.DATA].isNearbyLoaded;
export const getOfferSelector1 = (state) => state[nameSpace.DATA].offer;

export const getOfferSelector = createSelector(
    getResponseFavoritesSelector,
    getOfferSelector1,
    (responseFavorites, offer) => {
      const offerUpFavorite = responseFavorites.filter((elem) => elem.id === (offer && offer.id));
      if (offerUpFavorite.length) {
        return offerUpFavorite[ZERO];
      }
      return offer;
    }
);

export const getIsRoomLoadedSelector = (state) => state[nameSpace.DATA].isRoomLoaded;
export const getCommentsStoreSelector = (state) => state[nameSpace.DATA].comments;
export const getIsCommentsLoadedSelector = (state) => state[nameSpace.DATA].isCommentsLoaded;

export const getOfferNearbyForCardListSelector = createSelector(
    getOfferNearbySelector,
    getOfferSelector,
    getResponseFavoritesSelector,
    (offerNearby, offer, responseFavorites) => {
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
      }
      return offersForCardList;
    }
);

export const getEmailSelector = (state) => state[nameSpace.DATA].data.email;
