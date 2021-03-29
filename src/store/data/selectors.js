import {sectionsId, ZERO} from '/src/consts';
import {nameSpace} from '/src/store/root-reducer';
import {getCityChecked, getSortId} from '/src/store/user/selectors';
import {sortByHigthToLow, sortByPriceLowToHigth} from '/src/utils';

export const getOffersForMap = (state) => {
  const offers = getOffers(state);
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
    coordinatesCity,
  };
};

export const getOffers = (state) => {
  let filteredOffersOnCity = state[nameSpace.DATA].offers.filter((offer) => offer.city.name === getCityChecked(state));
  let sortOffersData = filteredOffersOnCity;
  const sortOffersFunc = () => {
    switch (getSortId(state)) {
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
  if (getResponseFavorites(state).length) {
    getResponseFavorites(state).forEach((favorite) => {
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

export const getIsDataLoaded = (state) => state[nameSpace.DATA].isDataLoaded;
export const getFavoritesList = (state) => state[nameSpace.DATA].favoritesList;
export const getIsFavoritesLoaded = (state) => state[nameSpace.DATA].isFavoritesLoaded;
export const getResponseFavorites = (state) => state[nameSpace.DATA].responseFavorites;
export const getIsNearbyLoaded = (state) => state[nameSpace.DATA].isNearbyLoaded;

export const getOffer = (state) => {
  const offerUpFavorite = getResponseFavorites(state).filter((elem) => elem.id === state[nameSpace.DATA].offer.id);
  if (offerUpFavorite.length) {
    return offerUpFavorite[ZERO];
  }
  return state[nameSpace.DATA].offer;
};

export const getIsRoomLoaded = (state) => state[nameSpace.DATA].isRoomLoaded;
export const getOfferNearby = (state) => state[nameSpace.DATA].offerNearby;
export const getCommentsStore = (state) => state[nameSpace.DATA].comments;
export const getIsCommentsLoaded = (state) => state[nameSpace.DATA].isCommentsLoaded;

export const getOfferNearbyForCardList = (state) => {
  let offersForCardList = getOfferNearby(state).filter((room) => room.id !== getOffer(state).id);
  if (getResponseFavorites(state).length) {
    getResponseFavorites(state).forEach((favorite) => {
      offersForCardList = offersForCardList.map((offerForCard) => {
        if (offerForCard.id === favorite.id) {
          return favorite;
        }
        return offerForCard;
      });
    });
  }
  return offersForCardList;
};
export const getEmail = (state) => state[nameSpace.DATA].data.email;
